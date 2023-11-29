import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { AlertDialogComponentComponent } from '../alert-dialog-component/alert-dialog-component.component';
import { ProfilePopupComponent } from '../profile-popup/profile-popup.component';

@Component({
  selector: 'app-furnitures',
  templateUrl: './furnitures.component.html',
  styleUrls: ['./furnitures.component.scss']
})
export class FurnituresComponent implements OnInit {
  result: string = '';
  // furnitureProducts: any[] = [
  //   {
  //     title: 'Taskwood Sofa',
  //     img: '../../assets/images/furproduct1.webp',
  //     img2: '../../assets/images/taskwood2.png',
  //     img3: '../../assets/images/taskwood3.webp',
  //     ratings: '4.3/5',
  //     reviews: '2,57,159 Ratings',
  //     Offerprice: '29,999',
  //     MRP: '79,999',
  //     Detail: 'Taskwood Furniture Fabric <br>Eight Seater Sofa Set <br>With 2 Ottman, 6 Pillos And Coffee Table For Hotel Fabric <br>8 Seater Sofa  (Finish Color - Black, Pre-assembled)',
  //     Specs: 'Upholestry: Cotton Blend'+
  //     '<br>Filling Material: Foam'+
  //     '<br>W x H x D: 238 cm x 66 cm x 71 cm (7 ft 9 in x 2 ft 1 in x 2 ft 3 in)'+
  //     '<br>Right Facing'+
  //     '<br>Delivery Condition: Pre Assembled (Ready to Use)'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Sales Package: Eight Seater Sofa Set In Pre-Assemble State.'+
  //     '<br>Model Number: '+
  //     'TWF-ESS-565'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Medium Density Fibre (MDF)'+
  //     '<br>Configuration:'+
  //     'L-shaped'+
  //     '<br>Upholstery Material: '+
  //     'Fabric'+
  //     '<br>Upholstery Material Subtype: '+
  //     'Cotton Blend'+
  //     '<br>Upholstery Color: '+
  //     'Black',
  //     Specs2heading: 'Product Details',
  //     Specs2: 'Filling Material: '+
  //     'Foam'+
  //     '<br>Adjustable Headrest: '+
  //     'No'+
  //     '<br>Maximum Load Capacity: '+
  //     '300 kg'+
  //     '<br>Origin of Manufacture: '+
  //     'Domestic',
  //     Specs3heading: 'Dimensions',
  //     Specs3: 'Width: '+
  //     '238 cm'+
  //     '<br>Height: '+
  //     '66 cm'+
  //     '<br>Depth: '+
  //     '71 cm'+
  //     '<br>Weight: '+
  //     '40 kg'+
  //     '<br>Seat Height: '+
  //     '40 cm',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Disclaimer',
  //     Specs5: 'The color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises. And if there is no elevator in a multi-storey building, we might be unable to deliver the item to your doorstep. Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels. Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled if carpentry-assembly is required. In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles.',
  //   },
  //   {
  //     title: 'Shira Bean Bag',
  //     img: '../../assets/images/furproduct4.webp',
  //     img2: '../../assets/images/shira2.webp',
  //     img3: '../../assets/images/shira3.webp',
  //     ratings: '3.7/5',
  //     reviews: '429 Ratings',
  //     Offerprice: '679',
  //     MRP: '1,899',
  //     Detail: 'SHIRA 24 XXL Chair Bean Bag Cover (Without Beans) (Orange, Blue)',
  //     Specs: 'Football Bag Cover'+
  //     '<br>Its Not The Air Bag'+
  //     '<br>Filled The Thermocol'+
  //     '<br>Single Seating'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand: '+
  //     'SHIRA 24'+
  //     '<br>Model Number: '+
  //     'Football Bean Bag Cover Orange-Navy-Blue'+
  //     '<br>Size: '+
  //     'XXL'+
  //     '<br>Brand Color: '+
  //     'Orange, Blue'+
  //     '<br>Type: '+
  //     'Chair'+
  //     '<br>Color: '+
  //     'Orange, Blue'+
  //     '<br>Beans Required: '+
  //     '2 kg'+
  //     '<br>Fastening Mechanism: '+
  //     'Zipper with Velcro'+
  //     '<br>Material: '+
  //     'Leatherette'+
  //     'Maximum Load Capacity: '+
  //     '80 kg'+
  //     '<br>Waterproof: '+
  //     'Yes',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '76 cm'+
  //     '<br>Height: '+
  //     '76 cm'+
  //     '<br>Weight: '+
  //     '0.5 kg'+
  //     '<br>Diameter: '+
  //     '76X76X51 cm'+
  //     '<br>Other Dimensions: '+
  //     'Length :76 X Width 76 X Height 51',
  //     Specs3heading: 'Additonal Features',
  //     Specs3: 'Washable: '+
  //     'Yes'+
  //     '<br>Care Instructions: '+
  //     'Wipe with a damp cloth | Do not use any corrosive liquids | Keep away from excessive heat | Keep away from sharp objects',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Disclaimer',
  //     Specs5: 'The color of the product may vary slightly from the picture displayed on your screen: this is due to lighting, pixel quality and color settings. Please check the product dimensions to ensure the product will fit in the desired location. Also, check if the product will fit through the entrance(s) and door(s) of the premises. And if there is no elevator in a multi-storey building, we might be unable to deliver the item to your doorstep. Please expect an unevenness of up to 5 mm in the product due to differences in surfaces and floor levels. Flipkart, or the Seller delivering the product, will not take up any type of civil work, such as drilling holes in the wall to mount the product. The product will only be assembled if carpentry-assembly is required. In case the product appears to lack shine, wiping the surface with a cloth will help clear the surface of dust particles.',
  //   },
  //   {
  //     title: 'Trevi Wardrobe',
  //     img: '../../assets/images/furproduct2.webp',
  //     img2: '../../assets/images/trevi2.webp',
  //     img3: '../../assets/images/trevi3.png',
  //     ratings: '3.8/5',
  //     reviews: '1,564 Ratings',
  //     Offerprice: '17,349',
  //     MRP: '39,990',
  //     Detail: 'Trevi Mustang <br>Engineered Wood <br>4 Door Wardrobe  <br>(Finish Color - Milky Teak & White, Knock Down)',
  //     Specs: 'Primary Material: Engineered Wood'+
  //     '<br>Width x Height: 145.2 cm x 180 cm (4 ft 9 in x 5 ft 10 in)'+
  //     '<br>Number Of Doors: 4'+
  //     '<br>Number Of Shelves: 10'+
  //     '<br>Weight: 98'+
  //     '<br>Delivery Condition: Knock Down - Delivered in non-assembled pieces, installation by service partner'+
  //     '<br>&nbsp'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand: '+
  //     'Trevi'+
  //     '<br>Model Number: '+
  //     'Ozone 4 Door Wardrobe With Drawer In Milky Teak & White Color'+
  //     '<br>Type: '+
  //     'Wardrobe'+
  //     '<br>Door Type: '+
  //     'Hinged Door'+
  //     '<br>Finish Type: '+
  //     'Melamine Finish'+
  //     '<br>Number of Drawers: '+
  //     '1'+
  //     '<br>Number of Shelves: '+
  //     '10'+
  //     '<br>Model Series Name: '+
  //     'Mustang',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '145.2 cm'+
  //     '<br>Height: '+
  //     '180 cm'+
  //     '<br>Weight: '+
  //     '98 kg'+
  //     '<br>Depth: '+
  //     '46.1 cm',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Primary Material: '+
  //     'Engineered Wood'+
  //     '<br>Primary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Primary Color: '+
  //     'White'+
  //     '<br>Finish Color: '+
  //     'Milky Teak & White',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'WakeFit Mattress',
  //     img: '../../assets/images/furproduct3.webp',
  //     img2: '../../assets/images/trevi2.webp',
  //     img3: '../../assets/images/trevi3.png',
  //     ratings: '4.5/5',
  //     reviews: '97,188 Ratings',
  //     Offerprice: '17,349',
  //     MRP: '39,990',
  //     Detail: 'Wakefit Orthopedic Memory <br>6 inch King PU Foam Mattress  (L x W: 78 inch x 72 inch)',
  //     Specs: 'Length: 78 inch, <br>Width: 72 inch, <br>Thickness: 6 inch (6 ft 6 in x 6 ft x 6 in)'+
  //     '<br>Support Type: PU Foam'+
  //     '<br>Comfort Layer: Memory Foam'+
  //     '<br>Mattress Features: Orthopedic Mattress'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand: '+
  //     'WakeFit'+
  //     '<br>Support Layer: '+
  //     'PU Form'+
  //     '<br>Comfort Layer: '+
  //     'Memory Foam'+
  //     '<br>Size: '+
  //     'King'+
  //     '<br>Color: '+
  //     'Grey, White'+
  //     '<br>Upholstery Material: '+
  //     'Cotton Blend'+
  //     '<br>Comfort Level: '+
  //     'Medium Firm'+
  //     '<br>Model Series Name: '+
  //     'Orthopedic Memory',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Thickness: '+
  //     '152 mm'+
  //     '<br>Width: '+
  //     '1828 mm'+
  //     '<br>Length: '+
  //     '1981 mm'+
  //     '<br>Weight: '+
  //     '231 kg',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Primary Material: '+
  //     'Engineered Wood'+
  //     '<br>Primary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Primary Color: '+
  //     'White'+
  //     '<br>Finish Color: '+
  //     'Milky Teak & White',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'LifeStyle Sofas',
  //     img: '../../assets/images/furproduct5.jpg',
  //     img2: '../../assets/images/lifestyle2.png',
  //     img3: '../../assets/images/lifestyle3.png',
  //     ratings: '4.1/5',
  //     reviews: '831 Ratings',
  //     Offerprice: '25,250',
  //     MRP: '40,000',
  //     Detail: 'Sekar Lifestyle <br>Polyurethane Series <br>Leatherette Sofa Set for Living Room <br>(Black, 3+1+1 Seater)',
  //     Specs: 'Brand:	Sekar Lifestyle'+
  //     '<br>Assembly Required:	No'+
  //     '<br>Product Dimensions:	80D x 80W x 80H Centimeters'+
  //     '<br>Item Weight:	110 Kilograms'+
  //     '<br>Special Feature:	Inflatable'+
  //     '<br>Upholstery Fabric Type:	Leather'+
  //     '<br>Room Type:	Living Room'+
  //     '<br>Arm Style:	Padded',
  //     Specs1heading: 'Style',
  //     Specs1: 'Modern, Primary Material: Foam & Leatherette <br>The color of the product may vary slightly from the picture displayed on your screen this is due to lighting, <br>pixel quality and color settings. <br>Accessories shown in the image are only for representation and are not part of the product.',
  //     Specs2heading: 'Measurement for Large Size',
  //     Specs2: '3 Seater Length x Width x Height (74 x 32 x 33 inches), <br>for 2 Seater Length x Width x Height (56 x 32 x 33 inches) <br>for 1 Seater Length x Width x Height (36 x 32 x 33 inches) <br> 32 Density Foam, Sofa will be normal after 10-15 days of usage.',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Primary Material: '+
  //     'Engineered Wood'+
  //     '<br>Primary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Primary Color: '+
  //     'Black',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Continental Wardrobe',
  //     img: '../../assets/images/furproduct6.webp',
  //     img2: '../../assets/images/continental2.webp',
  //     img3: '../../assets/images/continental3.webp',
  //     ratings: '3.8/5',
  //     reviews: '76,889 Ratings',
  //     Offerprice: '1,199',
  //     MRP: '2,499',
  //     Detail: 'CONTINENTAL 6+2 Shelves <br>Portable <br>88130 PP Collapsible Wardrobe  <br>(Finish Color - Grey, DIY(Do-It-Yourself))',
  //     Specs: 'Foldable'+
  //     '<br>W x H x D: 126 cm x 166 cm x 42.5 cm (4 ft 1 in x 5 ft 5 in x 1 ft 4 in)'+
  //     '<br>Primary Material: Fabric'+
  //     '<br>Secondary Material: Metal'+
  //     '<br>DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Sales Package: '+
  //     '72 Pipe , 4 Hanger Jointer ,16 Tee Joint , 8 Cross Joint , 8 Straight , 4 Three Fee , 4 Four Fee , 14 Shelve , 1 Cover'+
  //     'Model Number: '+
  //     '88130'+
  //     '<br>Secondary Material Subtype: '+
  //     'Wrought Iron'+
  //     '<br>Style: '+
  //     'Floor Standing'+
  //     '<br>Finish Type: '+
  //     'Fabric'+
  //     '<br>Care Instructions: '+
  //     'Keep Away From Rats'+
  //     '<br>Weight: '+
  //     '3.1 kg'+
  //     '<br>Number of Shelves: '+
  //     '8'+ 
  //     '<br>Maximum Load Capacity: '+
  //     '50 kg',
  //     Specs2heading: 'Measurement for Large Size',
  //     Specs2: '3 Seater Length x Width x Height (74 x 32 x 33 inches), <br>for 2 Seater Length x Width x Height (56 x 32 x 33 inches) <br>for 1 Seater Length x Width x Height (36 x 32 x 33 inches) <br> 32 Density Foam, Sofa will be normal after 10-15 days of usage.',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Primary Material: '+
  //     'Engineered Wood'+
  //     '<br>Primary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Primary Color: '+
  //     'Black',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Sona Art Cabinet',
  //     img: '../../assets/images/furproduct7.jpg',
  //     img2: '../../assets/images/sona2.png',
  //     img3: '../../assets/images/sona3.png',
  //     ratings: '4.4/5',
  //     reviews: '71 Ratings',
  //     Offerprice: '16,999',
  //     MRP: '25,000',
  //     Detail: 'SONA ART & CRAFTS <br>Solid Sheesham Wood Sideboard Tv Cabinet for Living Room <br> Free Standing Movable Tv Unit Side Board Table <br> With 3 Drawer & 2 Cabinet Storage Furniture for Home <br> Honey Finish',
  //     Specs: 'Colour:	SAC Honey Finish'+
  //     '<br>Brand:	SONA ART & CRAFTS'+
  //     '<br>Room Type:	Living Room'+
  //     '<br>Size: 	Length (142 cm) Width (43 cm) Height (86 cm)'+
  //     '<br>Shape:	Rectangular'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Style',
  //     Specs1: 'This Solid Sheesham Wood Sideboard Tv Cabinet for Living Room is the perfect choice for a TV cabinet. Made from durable Sheesham wood, this cabinet is designed to provide a stable and sturdy base for your TV, while also offering ample storage space for your other living room essentials. Its modern and stylish design will complement any decor, and its solid construction ensures that it will last for years to come. Overall, if you want a high-quality TV cabinet that is both practical and stylish, the Solid Sheesham Wood Sideboard Tv Cabinet for Living Room is the perfect choice.',
  //     Specs2heading: 'Dimensions:',
  //     Specs2: 'Length (142 cm) <br>Width (43 cm) <br>Height (86 cm)',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Material: Solid Sheesham Wood, <br>Color: Honey Finish, <br>Style: Contemporary',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'KaiZone Table',
  //     img: '../../assets/images/furproduct8.webp',
  //     img2: '../../assets/images/kaizone2.webp',
  //     img3: '../../assets/images/kaizone3.png',
  //     ratings: '3.9/5',
  //     reviews: '10,934 Ratings',
  //     Offerprice: '399',
  //     MRP: '1,999',
  //     Detail: 'KAIZONE Multipurpose Foldable <br>With Cup Holder, Study , Bed, Portable Wood <br>Portable Laptop Table  <br>(Finish Color - Brown, Pre Assembled)',
  //     Specs: 'Primary Material: Wood'+
  //     '<br>W x H x D: 60 cm x 9 cm x 12 cm (1 ft 11 in x 3 in x 4 in)'+
  //     '<br>Foldable'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Model Series Name: '+
  //     'Multipurpose Foldable with Cup Holder, Study , Bed, Portable'+
  //     '<br>Model Number: '+
  //     'Brown Foldable Laptop Table with Cup Holder, Study Table, Breakfast Table, Bed Table, Fordable and Portable/Ergonomic & Rounded Edges/Non-Slip Legs'+
  //     '<br>Primary Material: '+
  //     'Wood'+
  //     '<br>Primary Material SubType: '+
  //     'MFB (Melamine Fiberboard)'+
  //     '<br>Secondary Material: '+
  //     'Solid Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Plywood'+
  //     '<br>Delivery Condition: '+
  //     'Pre Assembled'+
  //     '<br>Compatible Laptop Size: '+
  //     '24 cm'+
  //     '<br>Foldable: '+
  //     'Yes'+
  //     '<br>Adjustable Height: '+
  //     'No',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '60 cm'+
  //     '<br>Height: '+
  //     '9 cm'+
  //     '<br>Depth: '+
  //     '12 cm'+
  //     '<br>Weight: '+
  //     '0.4 kg',
  //     Specs3heading: 'Other Features',
  //     Specs3: 'Complete assembly without worrying about installation. <br>It can also be used as a snack and dining table. <br>High-Quality Materials: Made of MDF wood and aluminum alloy tube which strong enough to use. <br>Write while sitting comfortably on the sofa and this comes with a cup holder to keep your favourite drink within your reach. <br>Easy to Clean: The surface is smooth and non-toxic, dirt-proof and waterproof',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Reom Shoe Rack',
  //     img: '../../assets/images/reom.png',
  //     img2: '../../assets/images/reom2.png',
  //     img3: '../../assets/images/reom3.png',
  //     ratings: '3.7/5',
  //     reviews: '3,406 Ratings',
  //     Offerprice: '343',
  //     MRP: '599',
  //     Detail: 'Reom Enterprise Havey <br>PVC pipe plastic shoe rack <br>Plastic Shoe Stand  <br>(4 Shelves, DIY(Do-It-Yourself))',
  //     Specs: 'Material Subtype: PP'+
  //     '<br>Width x Height: 45 cm x 65 cm (1 ft 5 in x 2 ft 1 in)'+
  //     '<br>Type: Shoe Stand'+
  //     '<br>Capacity: 8'+
  //     '<br>Delivery Condition: DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'Brand: '+
  //     'Reom Enterprise'+
  //     '<br>Model Number: '+
  //     '4 Shelves Multipurpose Plastic Rack( Heavy PVC Pipe ),Book Shelf, shoe rack or wardrobe'+
  //     '<br>Model Name: '+
  //     'Havey PVC pipe plastic shoe rack'+
  //     '<br>Type: '+
  //     'Shoe Stand'+
  //     '<br>Material: '+
  //     'Plastic'+
  //     '<br>Number of Shoe Pairs: '+
  //     '8'+
  //     '<br>Suitable For: '+
  //     'indoor, outdoor'+
  //     '<br>Material Subtype: '+
  //     'PP',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '45 cm'+
  //     '<br>Height: '+
  //     '65 cm'+
  //     '<br>Depth: '+
  //     '30 cm'+
  //     '<br>Weight: '+
  //     '0.35 kg',
  //     Specs3heading: 'Body & Design Features',
  //     Specs3: 'Wall Mount Support: '+
  //     'No'+
  //     '<br>Seating Provided: '+
  //     'No'+
  //     '<br>Number of Shelves: '+
  //     '4'+
  //     '<br>Shelf Material: '+
  //     'PVC pipe'+
  //     '<br>Portable: '+
  //     'Yes'+
  //     '<br>Foldable: '+
  //     'Yes'+
  //     '<br>Lock Provided: '+
  //     'No'+
  //     '<br>Adjustable Racks: '+
  //     'No',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Timber Cabinet',
  //     img: '../../assets/images/timber1.png',
  //     img2: '../../assets/images/timber2.png',
  //     img3: '../../assets/images/timber3.png',
  //     ratings: '4.3/5',
  //     reviews: '831 Ratings',
  //     Offerprice: '18,999',
  //     MRP: '42,500',
  //     Detail: 'Timber Taste SolidWood TV Cabinet <br>Entertainment Unit with Drawers and Shelf Storage <br>For Home Living Room Solid Wood TV Table <br>For Bedroom Hall & Office Furniture <br>Natural Teak Finish',
  //     Specs: 'Brand:	Timber Taste'+
  //     '<br>Colour:	NaturalTeak'+
  //     '<br>Material:	Rosewood'+
  //     '<br>Product Dimensions:	174.4D x 15.7W x 52.8H Centimeters'+
  //     '<br>Special Feature:	Lined, Cord Rewind, Cordless, Bagless, Programmable'+
  //     '<br>Mounting Type:	Floor Mount'+
  //     '<br>Weight Limit:	100 Kilograms',
  //     Specs1heading: 'Special Features',
  //     Specs1: 'Multifunction And Pre-Assembled <br> Item Shape: Rectangle, <br>Made In INDIA by artisans using traditional ways in sheesham wood <br> Best for everyday Make In SolidWood Sheesham',
  //     Specs2heading: 'Dimensions',
  //     Specs2: '174.4D x 15.7W x 52.8H Centimeters',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Primary Material: '+
  //     'Engineered Wood'+
  //     '<br>Primary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Particle Board',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'Crempire Swing',
  //     img: '../../assets/images/crempie1.png',
  //     img2: '../../assets/images/crempire2.png',
  //     img3: '../../assets/images/crempire3.webp',
  //     ratings: '3.7/5',
  //     reviews: '1,173 Ratings',
  //     Offerprice: '329',
  //     MRP: '995',
  //     Detail: 'CREMPIRE Magic Swing <br>Jhula for Kids <br>Cotton Hammock  <br>(Multicolor, DIY(Do-It-Yourself))',
  //     Specs: 'Material: Cotton'+
  //     '<br>Color: Multicolor'+
  //     '<br>Maximum Load: 50 kg | Weight: 0.45 kg'+
  //     '<br>W x H: 30 cm x 38 cm (11 in x 1 ft 2 in)'+
  //     '<br>DIY - Basic assembly to be done with simple tools by the customer, comes with instructions.'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Brand',
  //     Specs1: 'Brand: '+
  //     'CREMPIRE'+
  //     '<br>Model Number: '+
  //     'Premium Quality Magic Swing Jhula for Kids Children Folding and Washable for 0-5 Years Babies with Safety Belt Home Garden Jhula for Babies, Baby Hanging Classic Swing Jhula'+
  //     '<br>Model Name: '+
  //     'Magic Swing Jhula for Kids'+
  //     '<br>Material: '+
  //     'Cotton'+
  //     '<br>Color: '+
  //     'Multicolor'+
  //     '<br>Number of People: '+
  //     '1'+
  //     '<br>Maximum Load: '+
  //     '50 kg'+
  //     '<br>Type: '+
  //     'Hammock'+
  //     '<br>Net Quantity: '+
  //     '1',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Width: '+
  //     '30 cm'+
  //     '<br>Length: '+
  //     '38 cm'+
  //     '<br>Weight: '+
  //     '0.45 kg',
  //     Specs3heading: 'Body & Design Features',
  //     Specs3: 'Chain Included: '+
  //     'No'+
  //     '<br>Attached Handle: '+
  //     'No'+
  //     '<br>Foldable: '+
  //     'Yes'+
  //     '<br>Portable: '+
  //     'Yes',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  //   {
  //     title: 'UrbanWood Dining Table',
  //     img: '../../assets/images/urbanwood.png',
  //     img2: '../../assets/images/urbanwood2.png',
  //     img3: '../../assets/images/urbanwood3.png',
  //     ratings: '5/5',
  //     reviews: '1 Rating',
  //     Offerprice: '13,299',
  //     MRP: '29,999',
  //     Detail: 'UW UrbanWood Furniture <br>Sheesham Wood <br>4 Seater Dining Table with 3 Chairs and 1 Bench <br>Wooden Dining Set <br>Solid Wood Dining Table Set for Living Room Home (Honey)',
  //     Specs: 'Colour:	Honey Finish'+
  //     '<br>Brand:	UW UrbanWood'+
  //     '<br>Room Type:	Living Room'+
  //     '<br>Size:	4 Seater'+
  //     '<br>Assembly Required:	Yes'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'This 4 Seater dining table set makes for a great addition to your home. This Dining Table set has an extremely modern and contemporary look that helps you set up a stylish dining space in your home.'+
  //     'Smooth dining table & chair finishes let you easily wipe them clean to take care of messes, so your dining set can maintain a new look through years of use, Crafted with a durable, rust-resistant solid wood, this set is built to remain sturdy for long-lasting use',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'Table: <br>Length (86.36 cm) <br>Width (86.36 cm) <br>Height (76.2 cm); <br>Chair: <br>Length (40.64 cm) <br>Width (43.18 cm) <br>Height (86.36 cm); <br>Bench: <br>Length (58.42 cm) <br>Width (41.91 cm) <br>Height (45.72 cm)',
  //     Specs3heading: 'Material & Color',
  //     Specs3: 'Primary Material: '+
  //     'Sheesham Wood'+
  //     '<br>Primary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Secondary Material: '+
  //     'Engineered Wood'+
  //     '<br>Secondary Material Subtype: '+
  //     'Particle Board'+
  //     '<br>Primary Color: '+
  //     'Honey',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Warranty Summary: '+
  //     '1 Year Brand Warranty of Termite / 10 Days For Manufacturing Defect'+
  //     '<br>Covered in Warranty: '+
  //     'Termites & Fungus (This Item Is Eligible For Replacement, Within 10 Days Of Delivery, In An Unlikely Event Of Damaged, Defective Or Different/Wrong Item Delivered To You. Please Keep The Item In Its Original Condition, Original Packaging, With User Manual, Warranty Cards, And Original Accessories In Manufacturer Packaging For A Successful Return Pick-Up). (If Customer want to claim warranty against Termite & Fungus. Customer will have to bear Shipping charges).',
  //     Specs5heading: 'Installation & Demo',
  //     Specs5: 'The installation and demo for this product are done free of cost as part of this purchase (valid only for Knock Down products). We will share the installation date at the time of order, according to which our service partner will visit your location.',
  //   },
  // ]

  furProducts: any[] = [];
  constructor(private router: Router, public dialog: MatDialog, private userService: UserService, private cookieService:CookieService, private apiService: ApiService) { }

  loadFurProducts() {
    const furCategoryId = 2;
    this.apiService.getcategoryProductDetails(furCategoryId).subscribe(
      (data) => {
        console.log('Cloth Products:', data);
        this.furProducts = data as any[];
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
    this.loadFurProducts();
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
    this.dialog.open(ProfilePopupComponent, {
      data: {
        icon: 'close',
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
