import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { AlertDialogComponentComponent } from '../alert-dialog-component/alert-dialog-component.component';


@Component({
  selector: 'app-clothes',
  templateUrl: './clothes.component.html',
  styleUrls: ['./clothes.component.scss']
})

export class ClothesComponent implements OnInit {
  name = 'Angular';
  
  result: string = '';
  // clothProducts: any[] = [
  //   {
  //     title: 'Allen Solly Suit',
  //     img: '../../assets/images/allen1.png',
  //     img2: '../../assets/images/allen2.png',
  //     img3: '../../assets/images/allen3.png',
  //     ratings: '4.3/5',
  //     reviews: '2,57,159 Ratings',
  //     Offerprice: '13,499',
  //     MRP: '14,999',
  //     Detail: 'Allen Solly Men <br>Single Breasted Checkered Suit',
  //     Specs: 'Ideal For: Men'+
  //     '<br>Occasion: '+
  //     'Formal'+
  //     '<br>Pattern: '+
  //     'Checkered'+
  //     '<br>Color: '+
  //     'Grey'+
  //     '<br>Type: '+
  //     'Single Breasted'+
  //     '<br>Fabric: '+
  //     'Wool Blend'+
  //     '<br>Fit: '+
  //     'Slim'+
  //     '<br>Dry Clean Only'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Sales Package: Eight Seater Sofa Set In Pre-Assemble State.'+
  //     // '<br>Model Number: '+
  //     // 'TWF-ESS-565'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Medium Density Fibre (MDF)'+
  //     // '<br>Configuration:'+
  //     // 'L-shaped'+
  //     // '<br>Upholstery Material: '+
  //     // 'Fabric'+
  //     // '<br>Upholstery Material Subtype: '+
  //     // 'Cotton Blend'+
  //     // '<br>Upholstery Color: '+
  //     // 'Black',
  //     // Specs2heading: 'Product Details',
  //     // Specs2: 'Filling Material: '+
  //     // 'Foam'+
  //     // '<br>Adjustable Headrest: '+
  //     // 'No'+
  //     // '<br>Maximum Load Capacity: '+
  //     // '300 kg'+
  //     // '<br>Origin of Manufacture: '+
  //     // 'Domestic',
  //     // Specs3heading: 'Dimensions',
  //     // Specs3: 'Width: '+
  //     // '238 cm'+
  //     // '<br>Height: '+
  //     // '66 cm'+
  //     // '<br>Depth: '+
  //     // '71 cm'+
  //     // '<br>Weight: '+
  //     // '40 kg'+
  //     // '<br>Seat Height: '+
  //     // '40 cm',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Disclaimer',
  //     // Specs5: 'The color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises. And if there is no elevator in a multi-storey building, we might be unable to deliver the item to your doorstep. Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels. Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled if carpentry-assembly is required. In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles.',
  //   },
  //   {
  //     title: 'Urbano Jeans',
  //     img: '../../assets/images/urbano1.png',
  //     img2: '../../assets/images/urbano2.png',
  //     img3: '../../assets/images/urbano3.png',
  //     ratings: '3.4/5',
  //     reviews: '5 Ratings',
  //     Offerprice: '787',
  //     MRP: '2,599',
  //     Detail: 'Urbano Plus <br>Men Boot-Leg Mid Rise <br>Dark Blue Jeans',
  //     Specs: 'Ideal For: Men'+
  //     '<br>Suitable For: '+
  //     'Western Wear'+
  //     '<br>Pack Of: '+
  //     '1'+
  //     '<br>Pocket Type: '+
  //     'Curved Pocket'+
  //     '<br>Pattern: '+
  //     'Washed'+
  //     '<br>Reversible: '+
  //     'No'+
  //     '<br>Sales Package: '+
  //     '1 Men Plus Size Denim Spray Washed Bootcut Jeans'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Brand: '+
  //     // 'SHIRA 24'+
  //     // '<br>Model Number: '+
  //     // 'Football Bean Bag Cover Orange-Navy-Blue'+
  //     // '<br>Size: '+
  //     // 'XXL'+
  //     // '<br>Brand Color: '+
  //     // 'Orange, Blue'+
  //     // '<br>Type: '+
  //     // 'Chair'+
  //     // '<br>Color: '+
  //     // 'Orange, Blue'+
  //     // '<br>Beans Required: '+
  //     // '2 kg'+
  //     // '<br>Fastening Mechanism: '+
  //     // 'Zipper with Velcro'+
  //     // '<br>Material: '+
  //     // 'Leatherette'+
  //     // 'Maximum Load Capacity: '+
  //     // '80 kg'+
  //     // '<br>Waterproof: '+
  //     // 'Yes',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Width: '+
  //     // '76 cm'+
  //     // '<br>Height: '+
  //     // '76 cm'+
  //     // '<br>Weight: '+
  //     // '0.5 kg'+
  //     // '<br>Diameter: '+
  //     // '76X76X51 cm'+
  //     // '<br>Other Dimensions: '+
  //     // 'Length :76 X Width 76 X Height 51',
  //     // Specs3heading: 'Additonal Features',
  //     // Specs3: 'Washable: '+
  //     // 'Yes'+
  //     // '<br>Care Instructions: '+
  //     // 'Wipe with a damp cloth | Do not use any corrosive liquids | Keep away from excessive heat | Keep away from sharp objects',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Disclaimer',
  //     // Specs5: 'The color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises. And if there is no elevator in a multi-storey building, we might be unable to deliver the item to your doorstep. Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels. Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled if carpentry-assembly is required. In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles.',
  //   },
  //   {
  //     title: 'Vtexx Shirt',
  //     img: '../../assets/images/vtexx1.png',
  //     img2: '../../assets/images/vtexx2.png',
  //     img3: '../../assets/images/vtexx3.png',
  //     ratings: '4.0/5',
  //     reviews: '51,862 Ratings',
  //     Offerprice: '299',
  //     MRP: '1,299',
  //     Detail: 'VTEXX Men <br>Slim Fit Solid Spread <br>Collar Casual Shirt',
  //     Specs: 'Pack of: 1'+
  //     '<br>Style Code: '+
  //     '13_LSTR_WINE'+
  //     '<br>Fit: '+
  //     'Slim'+
  //     '<br>Fabric: '+
  //     'Cotton Blend'+
  //     '<br>Sleeve: '+
  //     'Full Sleeve'+
  //     '<br>Pattern: '+
  //     'Solid'+
  //     '<br>Reversible: '+
  //     'No'+
  //     '<br>Collar: '+
  //     'Spread',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Brand: '+
  //     // 'Trevi'+
  //     // '<br>Model Number: '+
  //     // 'Ozone 4 Door Wardrobe With Drawer In Milky Teak & White Color'+
  //     // '<br>Type: '+
  //     // 'Wardrobe'+
  //     // '<br>Door Type: '+
  //     // 'Hinged Door'+
  //     // '<br>Finish Type: '+
  //     // 'Melamine Finish'+
  //     // '<br>Number of Drawers: '+
  //     // '1'+
  //     // '<br>Number of Shelves: '+
  //     // '10'+
  //     // '<br>Model Series Name: '+
  //     // 'Mustang',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Width: '+
  //     // '145.2 cm'+
  //     // '<br>Height: '+
  //     // '180 cm'+
  //     // '<br>Weight: '+
  //     // '98 kg'+
  //     // '<br>Depth: '+
  //     // '46.1 cm',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Primary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Primary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Primary Color: '+
  //     // 'White'+
  //     // '<br>Finish Color: '+
  //     // 'Milky Teak & White',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Blive',
  //     img: '../../assets/images/clothproduct3.webp',
  //     img2: '../../assets/images/blive2.webp',
  //     img3: '../../assets/images/blive3.webp',
  //     ratings: '3.6/5',
  //     reviews: '16,054 Ratings',
  //     Offerprice: '399',
  //     MRP: '1,999',
  //     Detail: 'BLIVE <br>BUY 1 GET 1 FREE <br>Men Typography Round Neck Cotton Blend <br>Brown, Black T-Shirt',
  //     Specs: 'Type: Round Neck'+
  //     '<br>Sleeve: '+
  //     'Full Sleeve'+
  //     '<br>Fit: '+
  //     'Regular'+
  //     '<br>Fabric: '+
  //     'Cotton Blend'+
  //     '<br>Pack of: '+
  //     '2'+
  //     '<br>Style Code: '+
  //     'BBR-BLRNFUL-Z62'+
  //     '<br>Neck Type: '+
  //     'Round Neck'+
  //     '<br>Ideal For: '+
  //     'Men',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Brand: '+
  //     // 'WakeFit'+
  //     // '<br>Support Layer: '+
  //     // 'PU Form'+
  //     // '<br>Comfort Layer: '+
  //     // 'Memory Foam'+
  //     // '<br>Size: '+
  //     // 'King'+
  //     // '<br>Color: '+
  //     // 'Grey, White'+
  //     // '<br>Upholstery Material: '+
  //     // 'Cotton Blend'+
  //     // '<br>Comfort Level: '+
  //     // 'Medium Firm'+
  //     // '<br>Model Series Name: '+
  //     // 'Orthopedic Memory',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Thickness: '+
  //     // '152 mm'+
  //     // '<br>Width: '+
  //     // '1828 mm'+
  //     // '<br>Length: '+
  //     // '1981 mm'+
  //     // '<br>Weight: '+
  //     // '231 kg',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Primary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Primary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Primary Color: '+
  //     // 'White'+
  //     // '<br>Finish Color: '+
  //     // 'Milky Teak & White',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Ezee Cloth',
  //     img: '../../assets/images/ezee1.png',
  //     img2: '../../assets/images/ezee2.jpg',
  //     img3: '../../assets/images/ezee3.jpg',
  //     ratings: '4.1/5',
  //     reviews: '831 Ratings',
  //     Offerprice: '99',
  //     MRP: '199',
  //     Detail: 'Ezee Multipurpose <br>White Microfiber Cloth <br>Pack of 5 for Dusting',
  //     Specs: 'Colour:	White'+
  //     '<br>Brand:	Ezee'+
  //     '<br>Material:	Cotton Cloth'+
  //     '<br>Number of Items:	1'+
  //     '<br>Special Feature:	Light weight'+
  //     '<br>Product Care Instructions:	Machine Wash'+
  //     '<br>Shape:	Rectangular'+
  //     '<br>Size:	Standard'+
  //     '<br>Item Weight:	100 Grams',
  //     // Specs1heading: 'Style',
  //     // Specs1: 'Modern, Primary Material: Foam & Leatherette <br>The color of the product may vary slightly from the picture displayed on your screen this is due to lighting, <br>pixel quality and color settings. <br>Accessories shown in the image are only for representation and are not part of the product.',
  //     // Specs2heading: 'Measurement for Large Size',
  //     // Specs2: '3 Seater Length x Width x Height (74 x 32 x 33 inches), <br>for 2 Seater Length x Width x Height (56 x 32 x 33 inches) <br>for 1 Seater Length x Width x Height (36 x 32 x 33 inches) <br> 32 Density Foam, Sofa will be normal after 10-15 days of usage.',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Primary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Primary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Primary Color: '+
  //     // 'Black',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'T2F Sweatshirt',
  //     img: '../../assets/images/t2f1.png',
  //     img2: '../../assets/images/t2f2.png',
  //     img3: '../../assets/images/t2f3.png',
  //     ratings: '3.8/5',
  //     reviews: '29,211 Ratings',
  //     Offerprice: '218',
  //     MRP: '1,800',
  //     Detail: 'T2F <br>Boys <br>Cotton Hooded <br>Neck Sweatshirt',
  //     Specs: 'Material Composition: 100% Cotton'+
  //     '<br>Sleeve: TypeLong Sleeve'+
  //     '<br>Material: TypeCotton'+
  //     '<br>Fit: TypeRegular'+
  //     '<br>Length: Standard Length'+
  //     '<br>Neck: StyleHooded Neck'+
  //     '<br>Country of Origin: India',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Sales Package: '+
  //     // '72 Pipe , 4 Hanger Jointer ,16 Tee Joint , 8 Cross Joint , 8 Straight , 4 Three Fee , 4 Four Fee , 14 Shelve , 1 Cover'+
  //     // 'Model Number: '+
  //     // '88130'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Wrought Iron'+
  //     // '<br>Style: '+
  //     // 'Floor Standing'+
  //     // '<br>Finish Type: '+
  //     // 'Fabric'+
  //     // '<br>Care Instructions: '+
  //     // 'Keep Away From Rats'+
  //     // '<br>Weight: '+
  //     // '3.1 kg'+
  //     // '<br>Number of Shelves: '+
  //     // '8'+ 
  //     // '<br>Maximum Load Capacity: '+
  //     // '50 kg',
  //     // Specs2heading: 'Measurement for Large Size',
  //     // Specs2: '3 Seater Length x Width x Height (74 x 32 x 33 inches), <br>for 2 Seater Length x Width x Height (56 x 32 x 33 inches) <br>for 1 Seater Length x Width x Height (36 x 32 x 33 inches) <br> 32 Density Foam, Sofa will be normal after 10-15 days of usage.',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Primary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Primary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Primary Color: '+
  //     // 'Black',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Lymio T-Shirt',
  //     img: '../../assets/images/lymio1.png',
  //     img2: '../../assets/images/sona2.png',
  //     img3: '../../assets/images/sona3.png',
  //     ratings: '4.0/5',
  //     reviews: '1,533 Ratings',
  //     Offerprice: '329',
  //     MRP: '499',
  //     Detail: 'Lymio Men T-Shirt <br> T-Shirt for Men <br> Plain T Shirt <br> T-Shirt (Rib)',
  //     Specs: 'Material Composition: Polyester'+
  //     '<br>Pattern: Solid'+
  //     '<br>Fit Type: Regular Fit'+
  //     '<br>Sleeve Type: Half Sleeve'+
  //     '<br>Length: Standard Length'+
  //     '<br>Neck Style: Dom'+
  //     '<br>Country of Origin: India'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'Style',
  //     // Specs1: 'This Solid Sheesham Wood Sideboard Tv Cabinet for Living Room is the perfect choice for a TV cabinet. Made from durable Sheesham wood, this cabinet is designed to provide a stable and sturdy base for your TV, while also offering ample storage space for your other living room essentials. Its modern and stylish design will complement any decor, and its solid construction ensures that it will last for years to come. Overall, if you want a high-quality TV cabinet that is both practical and stylish, the Solid Sheesham Wood Sideboard Tv Cabinet for Living Room is the perfect choice.',
  //     // Specs2heading: 'Dimensions:',
  //     // Specs2: 'Length (142 cm) <br>Width (43 cm) <br>Height (86 cm)',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Material: Solid Sheesham Wood, <br>Color: Honey Finish, <br>Style: Contemporary',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'M7 Track Suit',
  //     img: '../../assets/images/clothproduct8.webp',
  //     img2: '../../assets/images/m72.webp',
  //     img3: '../../assets/images/m73.webp',
  //     ratings: '3.6/5',
  //     reviews: '5,893 Ratings',
  //     Offerprice: '329',
  //     MRP: '1,599',
  //     Detail: 'M7 By Metronaut'+
  //     '<br>Colorblock Men Track Suit',
  //     Specs: 'Color: Black, Grey'+
  //     '<br>Pattern: '+
  //     'Colorblock'+
  //     '<br>Style Code: '+
  //     'COLORBLOCK'+
  //     '<br>Fabric: '+
  //     'Polycotton, Lycra Blend'+
  //     '<br>Fabric Care: '+
  //     'Gentle Hand wash and Machine Wash'+
  //     '<br>Sales Package: '+
  //     '1 tee and 1 Track Pant'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Model Series Name: '+
  //     // 'Multipurpose Foldable with Cup Holder, Study , Bed, Portable'+
  //     // '<br>Model Number: '+
  //     // 'Brown Foldable Laptop Table with Cup Holder, Study Table, Breakfast Table, Bed Table, Fordable and Portable/Ergonomic & Rounded Edges/Non-Slip Legs'+
  //     // '<br>Primary Material: '+
  //     // 'Wood'+
  //     // '<br>Primary Material SubType: '+
  //     // 'MFB (Melamine Fiberboard)'+
  //     // '<br>Secondary Material: '+
  //     // 'Solid Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Plywood'+
  //     // '<br>Delivery Condition: '+
  //     // 'Pre Assembled'+
  //     // '<br>Compatible Laptop Size: '+
  //     // '24 cm'+
  //     // '<br>Foldable: '+
  //     // 'Yes'+
  //     // '<br>Adjustable Height: '+
  //     // 'No',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Width: '+
  //     // '60 cm'+
  //     // '<br>Height: '+
  //     // '9 cm'+
  //     // '<br>Depth: '+
  //     // '12 cm'+
  //     // '<br>Weight: '+
  //     // '0.4 kg',
  //     // Specs3heading: 'Other Features',
  //     // Specs3: 'Complete assembly without worrying about installation. <br>It can also be used as a snack and dining table. <br>High-Quality Materials: Made of MDF wood and aluminum alloy tube which strong enough to use. <br>Write while sitting comfortably on the sofa and this comes with a cup holder to keep your favourite drink within your reach. <br>Easy to Clean: The surface is smooth and non-toxic, dirt-proof and waterproof',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Tripr Track Suit',
  //     img: '../../assets/images/tripr1.png',
  //     img2: '../../assets/images/tripr2.png',
  //     img3: '../../assets/images/tripr3.png',
  //     ratings: '3.8/5',
  //     reviews: '5,063 Ratings',
  //     Offerprice: '419',
  //     MRP: '1,999',
  //     Detail: 'TRIPR <br>Printed Men Track Suit',
  //     Specs: 'Color: Brown, Black'+
  //     '<br>Pattern: '+
  //     'Printed'+
  //     '<br>Style Code: '+
  //     'TBRBLRNFULD50-BLJOGJ24TRACKSUIT'+
  //     '<br>Fabric: '+
  //     'Cotton Blend'+
  //     '<br>Fabric Care: '+
  //     'Regular mechine wash'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'General',
  //     // Specs1: 'Brand: '+
  //     // 'Reom Enterprise'+
  //     // '<br>Model Number: '+
  //     // '4 Shelves Multipurpose Plastic Rack( Heavy PVC Pipe ),Book Shelf, shoe rack or wardrobe'+
  //     // '<br>Model Name: '+
  //     // 'Havey PVC pipe plastic shoe rack'+
  //     // '<br>Type: '+
  //     // 'Shoe Stand'+
  //     // '<br>Material: '+
  //     // 'Plastic'+
  //     // '<br>Number of Shoe Pairs: '+
  //     // '8'+
  //     // '<br>Suitable For: '+
  //     // 'indoor, outdoor'+
  //     // '<br>Material Subtype: '+
  //     // 'PP',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Width: '+
  //     // '45 cm'+
  //     // '<br>Height: '+
  //     // '65 cm'+
  //     // '<br>Depth: '+
  //     // '30 cm'+
  //     // '<br>Weight: '+
  //     // '0.35 kg',
  //     // Specs3heading: 'Body & Design Features',
  //     // Specs3: 'Wall Mount Support: '+
  //     // 'No'+
  //     // '<br>Seating Provided: '+
  //     // 'No'+
  //     // '<br>Number of Shelves: '+
  //     // '4'+
  //     // '<br>Shelf Material: '+
  //     // 'PVC pipe'+
  //     // '<br>Portable: '+
  //     // 'Yes'+
  //     // '<br>Foldable: '+
  //     // 'Yes'+
  //     // '<br>Lock Provided: '+
  //     // 'No'+
  //     // '<br>Adjustable Racks: '+
  //     // 'No',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Zolario Casual Shirts',
  //     img: '../../assets/images/zolario.png',
  //     img2: '../../assets/images/timber2.png',
  //     img3: '../../assets/images/timber3.png',
  //     ratings: '3.6/5',
  //     reviews: '318 Ratings',
  //     Offerprice: '449',
  //     MRP: '799',
  //     Detail: 'Zolario Cotton Casual Shirts for Men, <br>Regular Fit, Full Sleeve, <br>Ideal for Regular Wear, Office Smart Casuals',
  //     Specs: 'Material Composition: 80% Cotton, 20% Polyester'+
  //     '<br>Pattern: Self-Design'+
  //     '<br>Fit Type: Regular Fit'+
  //     '<br>Sleeve Type: Long Sleeve'+
  //     '<br>Collar Style: Button Down'+
  //     '<br>Length: Standard Length'+
  //     '<br>Country of Origin: India'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'Special Features',
  //     // Specs1: 'Multifunction And Pre-Assembled <br> Item Shape: Rectangle, <br>Made In INDIA by artisans using traditional ways in sheesham wood <br> Best for everyday Make In SolidWood Sheesham',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: '174.4D x 15.7W x 52.8H Centimeters',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Primary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Primary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Particle Board',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Zakar Kurta',
  //     img: '../../assets/images/zakar1.png',
  //     img2: '../../assets/images/zakar2.jpg',
  //     img3: '../../assets/images/zakar3.jpg',
  //     ratings: '3.7/5',
  //     reviews: '1,173 Ratings',
  //     Offerprice: '1,766',
  //     MRP: '3,599',
  //     Detail: 'ZAKAR STYLE Aliya-Cut Kurta, <br>Pent and Dupatta Set <br>For Women and Girls <br>In Digital Shine Print and Embroidery with Crape Inner',
  //     Specs: 'Material Composition: Muslin'+
  //     '<br>Sleeve Type: 3/4 Sleeve'+
  //     '<br>Neck Style: Round Neck'+
  //     '<br>Style: Pleated'+
  //     '<br>Material Type: Muslin'+
  //     '<br>Design Name: Embroidered'+
  //     '<br>Country of Origin: India'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'Brand',
  //     // Specs1: 'Brand: '+
  //     // 'CREMPIRE'+
  //     // '<br>Model Number: '+
  //     // 'Premium Quality Magic Swing Jhula for Kids Children Folding and Washable for 0-5 Years Babies with Safety Belt Home Garden Jhula for Babies, Baby Hanging Classic Swing Jhula'+
  //     // '<br>Model Name: '+
  //     // 'Magic Swing Jhula for Kids'+
  //     // '<br>Material: '+
  //     // 'Cotton'+
  //     // '<br>Color: '+
  //     // 'Multicolor'+
  //     // '<br>Number of People: '+
  //     // '1'+
  //     // '<br>Maximum Load: '+
  //     // '50 kg'+
  //     // '<br>Type: '+
  //     // 'Hammock'+
  //     // '<br>Net Quantity: '+
  //     // '1',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Width: '+
  //     // '30 cm'+
  //     // '<br>Length: '+
  //     // '38 cm'+
  //     // '<br>Weight: '+
  //     // '0.45 kg',
  //     // Specs3heading: 'Body & Design Features',
  //     // Specs3: 'Chain Included: '+
  //     // 'No'+
  //     // '<br>Attached Handle: '+
  //     // 'No'+
  //     // '<br>Foldable: '+
  //     // 'Yes'+
  //     // '<br>Portable: '+
  //     // 'Yes',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Uniq Jersey',
  //     img: '../../assets/images/uniq1.png',
  //     img2: '../../assets/images/uniq2.png',
  //     img3: '../../assets/images/uniq3.jpg',
  //     ratings: '4.3/5',
  //     reviews: '1 Rating',
  //     Offerprice: '350',
  //     MRP: '899',
  //     Detail: 'UNIQ <br>Men Printed Round Neck <br>Polyester Multicolor T-Shirt',
  //     Specs: 'Type: Round Neck'+
  //     '<br>Sleeve: '+
  //     'Half Sleeve'+
  //     '<br>Fit: '+
  //     'Regular'+
  //     '<br>Fabric: '+
  //     'Polyester'+
  //     '<br>Pack of: '+
  //     '1'+
  //     '<br>Style Code: '+
  //     'ss10-wh2023_realmo10'+
  //     '<br>Neck Type: '+
  //     'Round Neck'+
  //     '<br>Ideal For: '+
  //     'Men'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     // Specs1heading: 'General',
  //     // Specs1: 'This 4 Seater dining table set makes for a great addition to your home. This Dining Table set has an extremely modern and contemporary look that helps you set up a stylish dining space in your home.'+
  //     // 'Smooth dining table & chair finishes let you easily wipe them clean to take care of messes, so your dining set can maintain a new look through years of use, Crafted with a durable, rust-resistant solid wood, this set is built to remain sturdy for long-lasting use',
  //     // Specs2heading: 'Dimensions',
  //     // Specs2: 'Table: <br>Length (86.36 cm) <br>Width (86.36 cm) <br>Height (76.2 cm); <br>Chair: <br>Length (40.64 cm) <br>Width (43.18 cm) <br>Height (86.36 cm); <br>Bench: <br>Length (58.42 cm) <br>Width (41.91 cm) <br>Height (45.72 cm)',
  //     // Specs3heading: 'Material & Color',
  //     // Specs3: 'Primary Material: '+
  //     // 'Sheesham Wood'+
  //     // '<br>Primary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Secondary Material: '+
  //     // 'Engineered Wood'+
  //     // '<br>Secondary Material Subtype: '+
  //     // 'Particle Board'+
  //     // '<br>Primary Color: '+
  //     // 'Honey',
  //     // Specs4heading: 'Warranty',
  //     // Specs4: 'Warranty Summary: '+
  //     // '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     // '<br>Covered in Warranty: '+
  //     // 'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     // Specs5heading: 'Installation & Demo',
  //     // Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  // ]
  clothProducts: any[] = [];
  constructor(private router: Router, public dialog: MatDialog, private userService: UserService, private cookieService:CookieService, private apiService: ApiService) { }

  loadClothProducts() {
    const clothCategoryId = 4;
    this.apiService.getcategoryProductDetails(clothCategoryId).subscribe(
      (data) => {
        console.log('Cloth Products:', data);
        this.clothProducts = data as any[];
      },
      (error) => {
        console.error('Error fetching cloth products:', error);
      }
    );
  }
  

  selectProduct(product: any) {
    this.apiService.getProductDetails(product).subscribe(
      (productData)=>{
        this.userService.setSelectedProduct(productData);
        this.router.navigate(['/shop/product']);
      }
    )
  }
  ngOnInit(): void {
    if(this.userService.isLoggedIn()){
      if(this.loggedInUsername && this.phone){
        const expirationDate = new Date();
        expirationDate.setFullYear(expirationDate.getFullYear() + 1);
        this.cookieService.set('username', this.loggedInUsername, expirationDate);
        this.cookieService.set('phone', this.phone, expirationDate);
      }
    }
    console.log(this.cookieService.get('username'));
    if(!this.cookieService.check('username')){
      this.loginnav();
    }
    this.loadClothProducts()
  }
  isloginav = true;
  isHelloVisible = false;
  ispop = false;
  loggedInUsername: string | null = null;
  phone: string | null = null;

  toggleHello() {
    this.isHelloVisible = !this.isHelloVisible;
  }

  loginnav(){
    this.isloginav = !this.isloginav;
  }

  openAlertDialogComponentComponent() {
    this.dialog.open(AlertDialogComponentComponent, {
      data: {
        icon: 'Error',
        message: `Username: ${this.cookieService.get('username')}`,
        message2: `Contact: ${this.cookieService.get('phone')}`,
        buttonText: 'Okay'
      }
    });
  }

  onSearchKeyDown(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      const searchTerm = (event.target as HTMLInputElement).value.toLowerCase();
      if (searchTerm === 'electronics' || searchTerm === 'electronic' || searchTerm === 'elec' || searchTerm === 'ele') {
        this.toggleelecform();
      }
      else if(searchTerm === 'home appliances' || searchTerm === 'home' || searchTerm === 'home appliance' || searchTerm === 'home app'){
        this.togglehomeform();
      }
      else if(searchTerm === 'furnitures' || searchTerm === 'furniture' || searchTerm === 'fur'){
        this.togglefurform();
      }
      else if(searchTerm === 'clothes' || searchTerm === 'clothe' || searchTerm === 'cloth'){
        this.toggledecform();
      }
      else{
        this.togglenoneform();
      }
    }
  }
  
  

  ismain1 = true;
  iselec1 = false;
  ishome1 = false;
  isDec1 = false;
  isFur1 = false;
  isnone1 = false;
  toggleelecform(){
    this.router.navigate(['/shop/electronics-devices']);
  }
  togglehomeform(){
    this.router.navigate(['/shop/home-appliances']);
  }
  togglefurform(){
    this.router.navigate(['/shop/furnitures']);
  }
  toggledecform(){
    this.router.navigate(['/shop/clothes']);
  }
  togglenoneform(){
    const hm = document.getElementById("sidebar") as HTMLElement | null;
    if(hm){
      hm.style.marginTop = "-222px";
    }
    this.ismain1 = false;
    this.iselec1 = false;
    this.ishome1 = false;
    this.isFur1 = false;
    this.isDec1 = false;
    this.isnone1 = true;
  }
  toggleloginform(){
    this.cookieService.deleteAll();
    this.router.navigate(['/login'])
  }
  confirmDialog(): void {
    const message = `Are you sure you want Logout?`;

    const dialogData = new ConfirmDialogModel("Confirm Action", message);

    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      maxWidth: "400px",
      data: dialogData
    });

    dialogRef.afterClosed().subscribe(dialogResult => {
      this.result = dialogResult;
      if(dialogResult == true){
        this.router.navigate(['/login']);
      }
    });
  }


}
