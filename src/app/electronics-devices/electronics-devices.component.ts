import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogModel, ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { UserService } from '../user.service';
import { CookieService } from 'ngx-cookie-service';
import { ApiService } from '../api.service';
import { AlertDialogComponentComponent } from '../alert-dialog-component/alert-dialog-component.component';

@Component({
  selector: 'app-electronics-devices',
  templateUrl: './electronics-devices.component.html',
  styleUrls: ['./electronics-devices.component.scss']
})
export class ElectronicsDevicesComponent implements OnInit {
  result: string = '';
  // electronicProducts: any[] = [
  //   {
  //     title: 'Poco X3',
  //     img: '../../assets/images/pocoimg1.png',
  //     img2: '../../assets/images/pocoimg2.png',
  //     img3: '../../assets/images/pocoimg3.png',
  //     ratings: '4.3/5',
  //     reviews: '2,57,159 Ratings & 24,436 Reviews',
  //     Offerprice: '13,999',
  //     MRP: '19,999',
  //     Detail: 'POCO X3 (Shadow Gray)  6 GB RAM | 64 GB ROM | Expandable Upto 512 GB'+
  //     '<br>16.94 cm (6.67 inch) Full HD+ Display'+
  //     '<br>64MP + 13MP + 2MP + 2MP | 20MP Front Camera'+
  //     '<br>6000 mAh Lithium-ion Polymer Battery'+
  //     '<br>Qualcomm Snapdragon 732G Processor',
  //     Specs: '<b>General</b>'+
  //     '<br>In The Box'+
  //     ': Handset, Power Adaptor, USB Type C Data Cable, Phone Cover, SIM Ejector Tool, User Guide'+
  //     '<br>Model Number'+
  //     ': MZB07Z0IN'+
  //     '<br>Model Name'+
  //     ': X3'+
  //     '<br>Color'+
  //     ': Shadow Gray'+
  //     '<br>Quick Charging'+
  //     ': Yes'+
  //     '<br>SIM Type'+
  //     ': Dual Sim'+
  //     '<br>Hybrid Sim Slot'+
  //     ': Yes',
  //     Specs1heading: 'Display Features',
  //     Specs1: 'Display Size'+
  //     ': 16.94 cm (6.67 inch)'+
  //     '<br>Resolution'+
  //     ': 2400 x 1080 Pixels'+
  //     '<br>Resolution Type'+
  //     ': Full HD+ '+
  //     '<br>GPU'+
  //     ': Adreno 618'+
  //     '<br>Display Type'+
  //     ': Full HD+ Display'+
  //     '<br>Other Display Features'+
  //     ': Corning Gorilla Glass 5 Screen Protection, 120 Hz Refresh Rate, 240 Hz Touch Sampling Rate, HDR 10',
  //     Specs2heading: 'Os & Processor Features',
  //     Specs2: 'Operating System'+
  //     ': Android 10'+
  //     '<br>Processor Brand'+
  //     ': Snapdragon'+
  //     '<br>Processor Type'+
  //     ': Qualcomm Snapdragon 732G'+
  //     '<br>Processor Core'+
  //     ': Octa Core'+
  //     '<br>Primary Clock Speed'+
  //     ': 2.3 GHz'+
  //     '<br>Operating Frequency'+
  //     ': 2G: B2/B3/B5/B8, 3G: B1/B2/B5/B8, 4G LTE FDD: B1/B3/B5/B8, 4G LTE TDD: B40/B41',
  //     Specs3heading: 'Memory & Storage Features',
  //     Specs3: 'Internal Storage'+
  //     ': 64 GB'+
  //     '<br>RAM'+
  //     ': 6 GB'+
  //     '<br>Expandable Storage'+
  //     ': 512 GB'+
  //     '<br>Supported Memory Card Type'+
  //     ': microSD'+
  //     '<br>Memory Card Slot Type'+
  //     ': Hybrid Slot',
  //     Specs4heading: 'Camera Features',
  //     Specs4: 'Primary Camera Features'+
  //     ': Wide (64MP) + Ultra Wide (13MP) + Macro (2MP) + Depth (2MP) Rear Quad Camera Setup, 64MP Ultra Clear Mode, Night Mode, AI Scene Detection, Ultra Wide Angle, Pro Mode, Portrait Mode, Panorama Mode, Video, Short Video, VLOG, Google Lens, Slow Motion (at 960 fps)'+
  //     '<br>Secondary Camera Features'+
  //     ': 20MP Front Camera, Night Mode, Front HDR, Short Video'+
  //     '<br>Flash'+
  //     ': Rear LED Flash'+
  //     '<br>Video Recording Resolution'+
  //     ': Rear Camera: 4K (at 30 fps), 1080P (at 60 fps), Front Camera: 1080P (at 30 fps), 720P (at 30 fps)'+
  //     '<br>Dual Camera Lens'+
  //     ': Primary Camera',
  //     Specs5heading: 'Other Details',
  //     Specs5: 'Smartphone'+
  //     ': Yes'+
  //     '<br>SIM Size'+
  //     ': Nano'+
  //     '<br>User Interface'+
  //     ': MIUI 12 (For Poco Based on Android 10)'+
  //     '<br>Removable Battery'+
  //     ': No'+
  //     '<br>SMS'+
  //     ': Yes'+
  //     '<br>Graphics PPI'+
  //     ': 395 PPI'+
  //     '<br>Sensors'+
  //     ': Acceleration Sensor, Gyroscope, Ambient Light Sensor, Proximity Sensor, E-Compass, Fingerprint Sensor'+
  //     '<br>Browser'+
  //     ': Google Chrome'+
  //     '<br>Other Features'+
  //     ': Side Mounted Fingerprint Scanner, Face Unlock, Dual App Support, 33W Fast Charger, Notification Light, Screen Mirror/Cast, Liquid Cooling'+
  //     '<br>GPS Type'+
  //     ': A-GPS, Glonass, Beidou',
  //   },
  //   {
  //     title: 'Lenovo Legion Y540',
  //     img: '../../assets/images/legion .png',
  //     img2: '../../assets/images/legion2.jpg',
  //     img3: '../../assets/images/legion3.jpg',
  //     ratings: '4.0/5',
  //     reviews: '185 ratings',
  //     Offerprice: '62,999',
  //     MRP: '72,999',
  //     Detail: 'Lenovo Legion Y540,'+
  //     '<br>9th Gen Intel Core i5'+
  //     '<br>15.6-inch (39.62 cms)'+
  //     '<br>Full HD Gaming Laptop (Raven Black/2.3Kg),'+
  //     '<br>81SY00U6IN',
  //     Specs: 'Processor: 9th Gen Intel Core i5-9300HF | Speed: 2.4 GHz (Base) - 4.1 GHz (Max) | 4 Cores | 8MB Cache'+
  //     '<br>OS: Pre-Loaded Windows 10 Home with Lifetime Validity'+
  //     '<br>Memory and Storage: 8GB RAM DDR4-2666, Upgradable up to 32GB | 512 GB SSD'+
  //     '<br>Graphics: NVIDIA GeForce GTX 1650 4GB GDDR5 Dedicated Graphics'+
  //     '<br>Display: 15.6" Full HD (1920x1080) | Brightness: 250 nits | Anti-Glare | 45% NTSC Color Gamut | IPS Technology | 60 Hz Refresh Rate'+
  //     '<br>Cooling: Coldfront with Dual Channel thermal mechanism | 4 thermal vents | Dedicated heat syncs'+
  //     '<br>Battery Life: 4 Hours | 52.5 Wh Battery',
  //     Specs1heading: 'Heating',
  //     Specs1: '<b>The Coldfront is here</b>'+
  //     '<br>Heat—the nemesis of gaming performance—is no longer a concern, thanks to Legion Coldfront.'+
  //     '<br>Coldfront brings the latest features that a dual-channel thermal system can provide, including individual CPU and GPU cooling for cooler system temperatures, four thermal vents for improved airflow, dedicated heat syncs for cooler keyboard temperatures, and 70 individual fan blades per channel to reduce system noise.',
  //     Specs2heading: 'Lenovo Vantage',
  //     Specs2: '<b>Fine-tune your gaming style with Lenovo Vantage</b>'+
  //     '<br>Take your gaming to the next level with Vantage, featuring Legion Edge. Spend less time tweaking your settings and more time playing with automated performance, cooling, and power control settings.'+
  //     '<br>Get overclock support for CPU and RAM, full RGB lighting controls, real-time device performance monitoring, and more—all in one app.',
  //     Specs3heading: 'Connectivity',
  //     Specs3: '<b>Rear port connectivity</b>'+
  //     '<br>The Y540 features a convenient array of ports and connectors; plug in an external device or accessory or simply charge or secure your laptop with the following rear ports:'+
      
  //     '<br>1. USB-C'+
      
  //     '<br>2. Mini DisplayPort'+
      
  //     '<br>3. USB 3.1 Gen 1'+
      
  //     '<br>4. HDMI'+
      
  //     '<br>5. Ethernet'+
      
  //     '<br>6. AC adapter'+
      
  //     '<br>7. Kensington lock slot'+
      
  //     '<br><b>Side port connectivity</b>'+
  //     '<br>The Y540 also features the following side ports and connectors:'+
      
  //     '<br>8. USB 3.1 Gen 1'+
      
  //     '<br>9. USB 3.1 Gen 1'+
      
  //     '<br>10. Headphone/mic combo',
  //     Specs4heading: 'For Gamers',
  //     Specs4: '<b>Desktop-caliber gaming on the go:</b>'+
  //     '<br>With 9th Generation Intel Core i5 processors, the Legion Y540 delivers performance paralleling desktops, with the portability of laptops.'+ 
  //     '<br>With an 8 GB DDR4 RAM and 512 GB SSD the Y540 gives you the ideal mix of ample storage space and high drive speed.'+
  //     '<br><b>A new way to experience games:</b>'+
  //     '<br>NVIDIA GeForce GTX 1650 (4GB) delivers one of the best laptop gaming experiences. These sleek, powerful gaming rigs are powered by the new NVIDIA Turing GPU architecture and the revolutionary GTX platform.',
  //     Specs5heading: 'Other Details',
  //     Specs5: 'Item Weight: 2 kg 300 g'+
  //     '<br>Item Dimensions LxWxH:	36 x 26.7 x 2.5 Centimeters'+
  //     '<br>Manufacturer: Lenovo, One of the below: Hefei Bitland Information Technology Co.,Ltd - No.4088 Jiuxiu Road National Hefei economic & technology development area Hefei Anhui China LCFC (Hefei) Electronics Technology Co., Ltd. - NO.1-3188,YUNGU ROAD, HEFEI EXPORT PROCESSING ZONE. ANHUI PROVINCE,CHINA  Tech-Com(Shanghai) Computer Co Ltd - No.6 Ln.58,San-Zhuang Rd., Songjiang EPZ ShangHai, China Wistron InfoComillimeters (Kunshan) Co.Ltd - 168# First Avenue, Kunshan Export Processing Zone, Kunshan, Jiangsu, China Compal information technology (kunshan) CO., LTD. - Address: No. 58, the 1st street, Kunshan Export Processing Zone, Jiangsu, P.R.O.C. CHINA Kunshan Hichain storage Co. Ltd - No. 88 Xinxiang Road  Avenue Kunshan CBZ Wujiang Hichain warehousing LTD - No.2088 Pangjin road, Wujiang economic development area,  Jiangsu, China'
  //   },
  //   {
  //     title: 'Fireboltt Ninja Calling Pro Max',
  //     img: '../../assets/images/fireboltt.jpg',
  //     img2: '../../assets/images/fireboltt2.webp',
  //     img3: '../../assets/images/fireboltt3.webp',
  //     ratings: '4.0/5',
  //     Offerprice: '999',
  //     reviews: '10,941 ratings',
  //     MRP: '1,197',
  //     Detail: 'Fire-Boltt Newly Launched Ninja Call Pro Max'+
  //     '<br>2.01” Display Smart Watch,'+
  //     '<br>Bluetooth Calling,'+
  //     '<br>120+ Sports Modes,'+
  //     '<br>Health Suite,'+
  //     '<br>Voice Assistance',
  //     Specs: 'Brand	Fire-Boltt'+
  //     '<br>Manufacturer:	Fire-Boltt, Boltt Games Pvt Ltd'+
  //     '<br>Series:	Ninja Call Pro Max'+
  //     '<br>Colour:	Navy Blue'+
  //     '<br>Standing screen display size:	2.01 Inches'+
  //     '<br>Package Dimensions:	 16.5 x 7.1 x 3.1 cm; 36.8 Grams'+
  //     '<br>Item model number:	 BSW128'+
  //     '<br>Connectivity Type:	 Bluetooth',
  //     Specs1heading: 'Display Features',
  //     Specs1: '2.01” Large display,'+
  //     '<br>240*296 pixels resolution - Style meets technology in perfect harmony.'+
  //     '<br>Immerse yourself in the captivating world of the 2.01" large display, and a brilliant resolution of 240*296 pixels.'+
  //     '<br>Every detail comes to life with exceptional clarity and vibrancy with 320 NITS Peak Brightness',
  //     Specs2heading: 'Body',
  //     Specs2: 'Metal Body Design - Fire-Boltt Ninja Call Pro Max comes with a sleek and stunning metal body design.'+
  //     '<br>Unleash the power of longevity with impressive battery life.'+
  //     '<br>With up to 7 days of continuous usage and an astounding 15 days of standby time, this remarkable timepiece keeps up with your active lifestyle without missing a beat.',
  //     Specs3heading: 'Bluetooth Calling',
  //     Specs3: 'Stay connected wherever you go with Bluetooth calling.'+
  //     '<br>Seamlessly make and receive calls directly from your wrist, without the need to reach for your phone.'+
  //     '<br>The smartwatch ensures crystal-clear audio quality, allowing you to have conversations with ease.'+
  //     '<br>The watch needs to be charged for 2 hours to reach 100%. The charger should be a 3.7V to 5V adapter or any laptop output',
  //     Specs4heading: 'Camera & Music Control',
  //     Specs4: 'Effortlessly snap photos and record videos right from your wrist.'+ 
  //     '<br>Adjust camera settings, frame your shots, and capture the perfect angle.'+
  //     '<br>Enjoy seamless control over your favorite tracks, playlists, and music apps with the music control feature.'+ 
  //     '<br>Music Cannot Be stored in the watch, Volume cannot be controlled',
  //     Specs5heading: 'Other Details',
  //     Specs5: 'Voice Assistance - Experience the power of voice with the advanced Voice Assistance feature. With just a simple command, you can access a world of information, effortlessly manage your tasks, and stay connected on the go.'+
  //     '<br>Health suite - Elevate your health and well-being with the complete Health suite. From heart rate monitoring and sleep tracking to stress management and sedentary reminders, the smartwatch keeps a close eye on your well-being throughout the day. (This is not to be treated as a medical device)'+
  //     '<br>IP67 water resistant - Dive into the world of adventure without hesitation with the Ninja Call Pro Max smartwatch that comes with IP67 water resistance. Whether you are taking a refreshing swim, braving the rain, or working up a sweat during an intense workout, the smartwatch remains unfazed.',
  //   },
  //   {
  //     title: 'Srythm NiceComfort 95',
  //     img: '../../assets/images/headphones.png',
  //     img2: '../../assets/images/headphones2.jpg',
  //     img3: '../../assets/images/headphones3.webp',
  //     ratings: '4.3/5',
  //     reviews: '635 ratings',
  //     Offerprice: '3,998',
  //     MRP: '8,998',
  //     Detail: 'Srythm NiceComfort 95'+
  //     '<br>Hybrid Noise Cancelling Headphones,'+
  //     '<br>Wireless Bluetooth Headset with Transparency Mode,'+
  //     '<br>HD Sound',
  //     Specs: 'Brand:	Srhythm'+
  //     '<br>Model Name:	NC95'+
  //     '<br>Colour:	 Starry Silver'+
  //     '<br>Form Factor:	 Over Ear'+
  //     '<br>Connectivity Technology:	 Wireless'+
  //     '<br>Wireless Communication Technology:	Bluetooth'+
  //     '<br>Special Feature:	Sweatproof, Foldable, Fast Charging, Microphone Included'+
  //     '<br>Included Components:	USB-C charging cable, Aircraft adapter, 3.5mm audio cable, 3.5mm to 6.35mm adapter, Portable carry case',
  //     Specs1heading: 'Noise Cancelling',
  //     Specs1: 'Hybrid Active Noise Cancelling: New digital noise cancellation technology to quell 95% ambient noise in traffic, offices, and schools.'+ 
  //     '<br>Press the one click button to start the ANC mode.(Kindly note: NOT 100% noise canceling.Human voice can not be eliminated and the ANC is less effective in quiet environment.)',
  //     Specs2heading: 'Modes',
  //     Specs2: 'Transparency Mode: to amplify the sound of the environment for safety and interacting with the surroundings around you',
  //     Specs3heading: 'Material',
  //     Specs3: 'Sleek Product Feel: One multi-function knob control. Polished appearance and exquisite cutting process metal glow, the design simple agile, generous, and grace. Shaped headband and replaceable ear-pads with memory foam',
  //     Specs4heading: 'Weight',
  //     Specs4: '0.56lb Ultra-lightweight: Over-ear style, durable and lightweight structure with quality materials.'+ 
  //     '<br>Rotation and portable design',
  //     Specs5heading: 'Other Details',
  //     Specs5: '65Hours for Music by Bluetooth: Fast charging 10 minutes and works for 3 hours. Also support to connect via 3.5mm audio cable and watch TV on the back of airplane seat(Kindly note: still need little power for wired mode)'+
  //     '<br>Stable Wireless Connection: Combine with 5.0 Bluetooth version, automatic callback technology, up to 32-50feet connection without obstacles',
  //   },
  //   {
  //     title: 'Echo Dot 4th Gen',
  //     img: '../../assets/images/echo.png',
  //     img2: '../../assets/images/echo2.jpg',
  //     img3: '../../assets/images/echo3.jpg',
  //     ratings: '4.3/5',
  //     reviews: ' 21,241 ratings',
  //     Offerprice: '3,249',
  //     MRP: '5,499',
  //     Detail: 'Echo Dot (4th Gen, Blue)'+ 
  //     '<br>clock combo'+ 
  //     '<br>Wipro 9W LED smart color Bulb'+
  //     '<br>Alexa Built-in Smart Speaker (Powerful Bass, B084KSRFXJ, Blue)',
  //     Specs: 'Smart Speaker'+
  //     '<br>Connectivity: Bluetooth | WiFi'+
  //     '<br>Alexa Built-in'+
  //     '<br>Dimensions - 10.00 x 10.00 x 8.90 cms'+
  //     '<br>Wipro 9W LED smart color Bulb'+
  //     '<br>Extended protection for your device beyond the manufacturer warranty with coverage against all manufacturing defects.'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'This combo contains Echo Dot (4th Gen) with clock and Wipro 9W LED smart color bulb.'+ 
  //     '<br>Use this bundle to experience the magic of controlling your lights, using just your voice.'+
  //     '<br>Control your lights using voice, or control them remotely away from home. Or simply create routine to dim them automatically at night.'+ 
  //     '<br>Only Wi-Fi needed - no additonal hub or setup required!',
  //     Specs2heading: 'Speakers',
  //     Specs2: 'Echo Dot with clock (4th Gen) is our most popular smart speaker that comes in a refreshed design and delivers loud, crisp sound with powerful bass',
  //     Specs3heading: 'Display',
  //     Specs3: 'Comes with an LED display that shows time, outdoor temperature or timers. Tap the top to snooze. The light sensor automatically adjusts the displays brightness, day or night',
  //     Specs4heading: 'Songs',
  //     Specs4: 'Stream millions of songs from Amazon Prime Music, Spotify, JioSaavn, Gaana, Apple Music and Hungama Music'+
  //     '<br>Access songs in Hindi, English, Telugu, Tamil, Punjabi, Marathi, Bengali, Bhojpuri, Kannada and more',
  //     Specs5heading: 'Smart Home',
  //     Specs5: 'Get started with Smart home: <br>It is simple to make your home smart and use voice to control lights, ACs, TVs, geysers, water motors and more. Now Alexa can also help you set-up your smart bulb. Just say, “Alexa, help me set-up my Wipro bulb”',
  //   },
  //   {
  //     title: 'Macbook Air M1 Chip',
  //     img: '../../assets/images/mac1.png',
  //     img2: '../../assets/images/mac2.png',
  //     img3: '../../assets/images/mac3 .png',
  //     ratings: '4.3/5',
  //     reviews: ' 1,559 ratings',
  //     Offerprice: '69,990',
  //     MRP: '92,900',
  //     Detail: '13.3-inch/33.74 cm Retina Display, 8GB RAM, 256GB SSD Storage,'+
  //     '<br>Backlit Keyboard, <br>FaceTime HD Camera, <br>Touch ID.'+
  //     '<br>Works with iPhone/iPad; Gold',
  //     Specs: 'Screen Size:	13.3 Inches'+
  //     '<br>Colour:	Gold'+
  //     '<br>Hard Disk Size:	256 GB'+
  //     '<br>CPU Model:	Core M Family'+
  //     '<br>RAM Memory Installed Size:	8 GB'+
  //     '<br>Operating System:	MacOS 10.14 Mojave'+
  //     '<br>Graphics Card Description:	Integrated',
  //     Specs1heading: 'Battery',
  //     Specs1: 'All-Day Battery Life. <br>Go longer than ever with up to 18 hours of battery life.',
  //     Specs2heading: 'Performance',
  //     Specs2: 'Powerful Performance. <br>Take on everything from professional-quality editing to action-packed gaming with ease. <br>The Apple M1 chip with an 8-core CPU delivers up to 3.5x faster performance than the previous generation while using way less power.',
  //     Specs3heading: 'Memory',
  //     Specs3: 'Superfast Memory. <br> 8GB of unified memory makes your entire system speedy and responsive. <br>That way it can support tasks like memory-hogging multitab browsing and opening a huge graphic file quickly and easily.',
  //     Specs4heading: 'Display',
  //     Specs4: 'Stunning Display. <br>With a 13.3-inch/33.74 cm Retina display, images come alive with new levels of realism. <br>Text is sharp and clear, and colors are more vibrant.',
  //     Specs5heading: 'User-Friendliness',
  //     Specs5: 'Why Mac?  <br>Easy to learn. Easy to set up. Astoundingly powerful. Intuitive. Packed with apps to use right out of the box. <br>Mac is designed to let you work, play, and create like never before.'
  //   },
  //   {
  //     title: 'Apple Iphone 13',
  //     img: '../../assets/images/iphone .png',
  //     img2: '../../assets/images/iphone2.png',
  //     img3: '../../assets/images/iphone3.png',
  //     ratings: '4.5/5',
  //     reviews: '18,848 ratings',
  //     Offerprice: '50,499',
  //     MRP: '59,900',
  //     Detail: '6.1-inch (15.5 cm diagonal) Super Retina XDR display with True Tone'+
  //     '<br>64GB, 128GB, 256GB'+
  //     '<br>2.82 inches (71.5 mm)'+
  //     '<br>0.3 inch (7.65 mm)'+
  //     '<br>6.14 ounces (174 grams)',
  //     Specs: 'Brand:	Apple'+
  //     '<br>Model Name:	IPhone'+
  //     '<br>Network Service Provider:	Unlocked for All Carriers'+
  //     '<br>Operating System:	IOS 14'+
  //     'Cellular Technology:	5G'+
  //     '<br>Display: 15 cm (6.1-inch) Super Retina XDR display'+
  //     '<br>Camera: Advanced dual-camera system with 12MP Wide and Ultra Wide cameras'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Display',
  //     Specs1: '15 cm (6.1-inch) Super Retina XDR display with True Tone'+
  //     '<br>Cinematic mode adds shallow depth of field and shifts focus automatically in your videos',
  //     Specs2heading: 'Camera & Video',
  //     Specs2: 'Dual 12MP cameras with Portrait mode, Depth Control, Portrait Lighting, Smart HDR, and 4K Dolby Vision HDR video up to 30 fps',
  //     Specs3heading: 'Power & Battery',
  //     Specs3: 'Video playback:Up to 19 hours, Video playback (streamed):Up to 15 hours, Audio playback:Up to 75 hours, 20W adapter or higher (sold separately), Fast-charge capable: Up to 50% charge in around 30 minutes with 20W adapter or higher',
  //     Specs4heading: 'Warranty',
  //     Specs4: 'Apple-branded hardware product and accessories contained in the original packaging (“Apple Product”) come with a One-Year Limited Warranty. See apple.com/in/legal/warranty for more information.',
  //     Specs5heading: 'Resistances',
  //     Specs5: 'All-glass and surgical-grade stainless steel design, water and dust resistant (rated IP68)',
  //   },
  //   {
  //     title: 'PS5® Console - EA SPORTS FC™ 24 Bundle',
  //     img: '../../assets/images/ps5.png',
  //     img2: '../../assets/images/ps52.png',
  //     img3: '../../assets/images/ps53.png',
  //     ratings: '4.3/5',
  //     reviews: '57 ratings',
  //     Offerprice: '49,390',
  //     MRP: '59,390',
  //     Detail: 'PlayStation 5 console - Disc Edition'+
  //     '<br>Lightning Speed'+
  //     '<br>Haptic Feedback'+
  //     '<br>3D Audio'+
  //     '<br>HyperMotionV',
  //     Specs: '<b>Includes:</b>'+
  //     '<br>ASTRO’s PLAYROOM (Pre-installed game)'+
  //     '<br>Voucher for EA SPORTS FC™ 24 Ultimate Team™ digital content:'+
  //     '<br>&nbsp;&nbsp;One (1) Rare Gold Players Pack.'+
  //     '<br>&nbsp;&nbsp;Three (3) untradeable loan ICON Players for 5 Ultimate Team™ matches'+
  //     '<br>HDMI® cable'+
  //     '<br>AC power cord'+
  //     '<br>USB cable',
  //     Specs1heading: 'Speed',
  //     Specs1: 'Lightning Speed: <br>The ultra-high speed SSD maximises your play sessions with near-instant load times for installed PS5 games.',
  //     Specs2heading: 'Display',
  //     Specs2: 'Play your favorite PS5 games on your stunning 4K TV.'+
  //     '<br>Enjoy smooth and fluid high frame rate gameplay at up to 120fps for compatible games, with support for 120Hz output on 4K displays.'+
  //     '<br>PS5 consoles support 8K Output, so you can play games on your 4320p resolution display.',
  //     Specs3heading: 'Feedback',
  //     Specs3: 'Haptic Feedback: <br>Responsive vibrations react to your in‑game actions so you feel every tackle, kick and goal hitting the back of the net.',
  //     Specs4heading: 'Audio',
  //     Specs4: '3D Audio: <br>Experience what it feels like to play football on the biggest stages as 3D audio brings the stadium crowds to life.',
  //     Specs5heading: 'Other Details',
  //     Specs5: 'HyperMotionV: HyperMotionV captures the game as it’s truly played, using volumetric data from more than 180 professional men’s and women’s football matches to ensure player movements in-game accurately reflect real-world action on the pitch.'
  //   },
  //   {
  //     title: 'Xbox Series X',
  //     img: '../../assets/images/xbox.png',
  //     img2: '../../assets/images/xbox2.png',
  //     img3: '../../assets/images/xbox3.png',
  //     ratings: '4.6/5',
  //     reviews: '544 ratings',
  //     Offerprice: '49,199',
  //     MRP: '55,990',
  //     Detail: 'Xbox Series X <br>15.1 cm X 15.1 cm X 30.1 cm <br> 9.8lbs <br>Dedicated dual band Xbox Wireless radio. <br>Dolby TrueHD with Atmos',
  //     Specs: ' Xbox series X, the fastest, most powerful Xbox ever. <br>Play thousands of titles from four generations of consoles—all games look and play best on Xbox series X'+
  //     '<br>Experience next-gen speed and performance with the Xbox velocity architecture, powered by a custom SSD and integrated software'+
  //     '<br>Xbox game Pass ultimate includes over 100 high-quality games, online multiplayer, and an EA play membership for one low monthly price'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Processor',
  //     Specs1: 'CPU: 8X Cores @ 3.8 GHz (3.66 GHz w/SMT) Custom Zen 2 CPU'+
  //     '<br>GPU: 12 TFLOPS, 52 CUs @1.825 GHz Custom RDNA 2 GPU'+
  //     '<br>SOC Die Size: 360.45 mm2'+
  //     '<br>Process: 7nm Enhanced',
  //     Specs2heading: 'Memory & Storage',
  //     Specs2: 'Memory: 16GB GDDR6 w/320 bit-wide bus'+
  //     '<br>Memory Bandwidth: 10 GB @ 560 GB/s, 6 GB @ 336 GB/s.'+
  //     '<br>Internal Storage: 1TB Custom NVME SSD'+
  //     '<br>I/O Throughput: 2.4 GB/s (Raw), 4.8 GB/s (Compressed, with custom hardware decompression block)'+
  //     '<br>Expandable Storage: Support for 1TB Seagate Expansion Card for Xbox Series X|S matches internal storage exactly (sold separately). Support for USB 3.1 external HDD (sold separately).',
  //     Specs3heading: 'Video Capabilities',
  //     Specs3: 'Gaming Resolution: True 4K'+
  //     '<br>High Dynamic Range: Up to 8K HDR'+
  //     '<br>Optical Drive: 4K UHD Blu-Ray'+
  //     '<br>Performance Target: Up to 120 FPS'+
  //     '<br>HDMI Features: Auto Low Latency Mode. HDMI Variable Refresh Rate. AMD FreeSync.',
  //     Specs4heading: 'Sound Capabilities',
  //     Specs4: 'Dolby Digital 5.1'+
  //     '<br>DTS 5.1'+
  //     '<br>Dolby TrueHD with Atmos'+
  //     '<br>Up to 7.1 L-PCM',
  //     Specs5heading: 'PORTS & CONNECTIVITY',
  //     Specs5: 'HDMI: 1x HDMI 2.1 port'+
  //     '<br>USB: 3x USB 3.1 Gen 1 ports'+
  //     '<br>Wireless: 802.11ac dual band'+
  //     '<br>Ethernet: 802.3 10/100/1000'+
  //     '<br>Accessories radio: Dedicated dual band Xbox Wireless radio.',
  //   },
  //   {
  //     title: 'Apple AirPods Pro (2nd Generation)',
  //     img: '../../assets/images/airpods.png',
  //     img2: '../../assets/images/airpods2.png',
  //     img3: '../../assets/images/airpods3.png',
  //     ratings: '4.3/5',
  //     reviews: '2,134 ratings',
  //     Offerprice: '18,999',
  //     MRP: '26,990',
  //     Detail: 'Apple Airpods Pro (2nd Generation) <br>White <br>In Ear <br>Bluetooth 5.3 <br>Noise Cancelling',
  //     Specs: 'Active Noise Cancellation reduces unwanted background noise'+
  //     '<br>Adaptive Transparency lets outside sounds in while reducing loud environmental noise'+
  //     '<br>Personalised Spatial Audio with dynamic head tracking places sound all around you'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Weight',
  //     Specs1: 'AirPods Pro (each): 5.3 grams (0.19 ounces), <br>MagSafe Charging Case: 50.8 grams (1.79 ounces)',
  //     Specs2heading: 'Dimensions',
  //     Specs2: 'AirPods (each): 24.0 by 21.8 by 30.9 mm (0.94 by 0.86 by 1.22 inches), <br>MagSafe Charging Case: 45.2 by 21.7 by 60.6 mm (1.78 by 0.85 by 2.39 inches)',
  //     Specs3heading: 'Sensors',
  //     Specs3: 'Dual beamforming microphones, Inward-facing microphone, <br>Skin-detecting sensor, Motion-detecting accelerometer, <br>Speech-detecting accelerometer, Touch control',
  //     Specs4heading: 'Power & Battery',
  //     Specs4: 'AirPods Pro (2nd generation): Up to 6 hours of listening time with a single charge (up to 5.5 hours with Spatial Audio and head tracking enabled), Up to 4.5 hours of talk time with a single charge. <br>AirPods Pro (2nd generation) with MagSafe Charging Case: Up to 30 hours of listening time, Up to 24 hours of talk time, 5 minutes in the case provides around 1 hour of listening time or around 1 hour of talk time',
  //     Specs5heading: 'Other Details',
  //     Specs5: 'Adaptive Audio, Active Noise Cancellation and Transparency mode, <br>Conversation Awareness, Personalised Spatial Audio with dynamic head tracking, <br>Dust, sweat and water resistant, MagSafe Charging Case (USB-C) with speaker and lanyard loop, <br>Up to 6 hours of listening time with a single charge',
  //   },
  //   {
  //     title: 'Apple Watch SE (2nd Gen) ',
  //     img: '../../assets/images/applewatch.png',
  //     img2: '../../assets/images/applewatch2.png',
  //     img3: '../../assets/images/applewatch3.png',
  //     ratings: '4.5/5',
  //     reviews: '1,392 ratings',
  //     Offerprice: '21,999',
  //     MRP: '29,900',
  //     Detail: 'Apple Watch SE (2nd Gen) [GPS 40 mm] Smart Watch <br>w/Midnight Aluminium Case & Midnight Sport Band. <br>Fitness & Sleep Tracker, Crash Detection, <br>Heart Rate Monitor, Retina Display, Water Resistant',
  //     Specs: 'Brand:	Apple'+
  //     '<br>Model Name:	Watch SE'+
  //     '<br>Style:	GPS'+
  //     '<br>Colour:	Midnight'+
  //     '<br>Screen Size:	40 Millimetres'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'Why Apple Watch SE',
  //     Specs1: 'All the essentials to help you monitor your fitness, keep connected, track your health and stay safe. <br>Now up to 20% faster, with features like Crash Detection and enhanced workout metrics, <br>it’s a better value than ever.',
  //     Specs2heading: 'Customisations',
  //     Specs2: 'EASILY CUSTOMISABLE — Available in a range of sizes and colours, <br>with dozens of straps to choose from and watch faces with complications tailored to whatever you’re into.',
  //     Specs3heading: 'Health and Safety features',
  //     Specs3: 'Get help when you need it with Crash Detection, Fall Detection and Emergency SOS. <br>Get deep insights into your health, including notifications if you have an irregular rhythm or an unusually high or low heart rate.',
  //     Specs4heading: 'Compatibility',
  //     Specs4: 'SIMPLY COMPATIBLE — It works seamlessly with your Apple devices and services. <br>Unlock your Mac automatically. <br>Find your devices with a tap. <br>Apple Watch requires an iPhone 8 or later with the latest iOS version.',
  //     Specs5heading: 'Water Resistance',
  //     Specs5: 'SWIMPROOF AND STYLISH — Water resistant to 50 metres. <br>Three finishes. And a redesigned, colour-matched back case made with a new production process that reduces its carbon emissions by over 80%.'
  //   },
  //   {
  //     title: 'SoundPEATS NeckBand',
  //     img: '../../assets/images/neckband.png',
  //     img2: '../../assets/images/neckband2.jpg',
  //     img3: '../../assets/images/neckband3.jpg',
  //     ratings: '4.2/5',
  //     reviews: '1,543 ratings',
  //     Offerprice: '10,806',
  //     MRP: '16,806',
  //     Detail: 'SoundPEATS Force Pro <br>Wireless Bluetooth In Ear Neckband <br>Earphone with Mic (Clear) <br>In Ear <br>Wireless',
  //     Specs: 'Power, Play, Performance Boosted.'+
  //     '<br>Immersive Sound & Comfortable Fit'+
  //     '<br>IPX8-rated Waterproof'+
  //     '<br>Bluetooth 5.0 & Qualcomm® aptX™ HD'+
  //     '<br>Magnetic Design, Grab to Go'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;'+
  //     '<br>&nbsp;',
  //     Specs1heading: 'General',
  //     Specs1: 'The Q35 HD is here. <br>We kept the same great in-ear memory wire that was perfect for runners but added more battery life at 14 hours of playtime, and an even better sweat resistance on the inside and out. <br>These earbuds are more reliable than ever. It’s time to get out there and GO.',
  //     Specs2heading: 'Sound',
  //     Specs2: 'IMMERSIVE SOUND: '+
  //     '<br>Built-in with the latest Qualcomm 3034 chipset and Bluetooth 5.0, adopted Qualcomm APTX-HD codec, along with the 10mm driver, Q35 HD Bluetooth headphone tries to bring you high fidelity sound with strong bass and crisp highs and mids.',
  //     Specs3heading: 'Charging',
  //     Specs3: 'ATTACH AND CHARGE: <br>With magnets inside, the charging slot is more elegant and can provide better waterproof performance. <br>Simply attach and charge, a new charging experience you have ever had.',
  //     Specs4heading: 'Design',
  //     Specs4: 'MAGNETIC DESIGN: <br>Magnetic earbuds design allows your earphones to attach for easy carrying when not in use.',
  //     Specs5heading: 'Battery',
  //     Specs5: 'Battery Capacity: 110mAH(Double 55mAH)'+

  //     '<br>Charging Time: 1.5 hours'+
      
  //     '<br>Standby Time: 100 hours'+
      
  //     '<br>Play Time: 14 hours per charge by case',
  //   },
  // ]
  elecProducts: any[] =[];
  constructor(private router: Router, public dialog: MatDialog, private userService: UserService, private cookieService:CookieService, private apiService: ApiService) { }

  loadElecProducts() {
    const elecCategoryId = 1;
    this.apiService.getcategoryProductDetails(elecCategoryId).subscribe(
      (data) => {
        console.log('Cloth Products:', data);
        this.elecProducts = data as any[];
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
    this.loadElecProducts()
  }
  isloginav = true;
  isHelloVisible = false;
  ispop = false;
  loggedInUsername: string | null = null;
  phone: string | null = null;

  toggleHello() {
    this.isHelloVisible = !this.isHelloVisible;
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

  loginnav(){
    this.isloginav = !this.isloginav;
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
