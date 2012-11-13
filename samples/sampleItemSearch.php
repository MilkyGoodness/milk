<?php
/**
 * For a running Search Demo see: http://amazonecs.pixel-web.org
 */

if (is_file('sampleSettings.php'))
{
  include 'sampleSettings.php';
}

defined('AWS_API_KEY') or define('AWS_API_KEY', 'API KEY');
defined('AWS_API_SECRET_KEY') or define('AWS_API_SECRET_KEY', 'SECRET KEY');
defined('AWS_ASSOCIATE_TAG') or define('AWS_ASSOCIATE_TAG', 'ASSOCIATE TAG');

require '../lib/AmazonECS.class.php';

try
{
    // get a new object with your API Key and secret key. Lang is optional.
    // if you leave lang blank it will be US.
    $amazonEcs = new AmazonECS(AWS_API_KEY, AWS_API_SECRET_KEY, 'com', AWS_ASSOCIATE_TAG);

    // If you are at min version 1.3.3 you can enable the requestdelay.
    // This is usefull to get rid of the api requestlimit.
    // It depends on your current associate status and it is disabled by default.
    // $amazonEcs->requestDelay(true);

    // for the new version of the wsdl its required to provide a associate Tag
    // @see https://affiliate-program.amazon.com/gp/advertising/api/detail/api-changes.html?ie=UTF8&pf_rd_t=501&ref_=amb_link_83957571_2&pf_rd_m=ATVPDKIKX0DER&pf_rd_p=&pf_rd_s=assoc-center-1&pf_rd_r=&pf_rd_i=assoc-api-detail-2-v2
    // you can set it with the setter function or as the fourth paramameter of ther constructor above
    $amazonEcs->associateTag(AWS_ASSOCIATE_TAG);

    // from now on you want to have pure arrays as response
    $amazonEcs->returnType(AmazonECS::RETURN_TYPE_ARRAY);

    // and again... Changing the responsegroup and category before
    // and again... Changing the responsegroup and category before
	$q = $_GET['q'];
	if(!$q)
		$q = 'Milk';
	
    $response = $amazonEcs->responseGroup('Large')
				->category('All')
				->search($q);

    //echo json_encode($response->Items);
//var_dump($response);
//var_dump($response);
$items = $response['Items']['Item'];
$cleaned_items = array();
foreach($items as $item) {
  $cleaned_item = new stdClass();
  $cleaned_item->sku = $item['ItemAttributes']['SKU'];
  $cleaned_item->title = $item['ItemAttributes']['Title'];
  $cleaned_item->price = $item['ItemAttributes']['ListPrice']['FormattedPrice'];
  $cleaned_item->imageUrl = $item['LargeImage']['URL'];
  $cleaned_item->imageWidth = $item['LargeImage']['Width']['_'];
  $cleaned_item->imageHeight = $item['LargeImage']['Height']['_'];
  
  $cleaned_items[] = $cleaned_item;
}

echo json_encode($cleaned_items);

}
catch(Exception $e)
{
  echo $e->getMessage();
}

