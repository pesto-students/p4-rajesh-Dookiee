**Browser Internals**

**UI:** 
  front face of the browser for the user make interactions with it. like toolbar, URL bar, bookmarks, etc,. 

**The browser & Rendering engine:** 
  connection between the UI and the rendering engine. convert code into the Visual components

**Network:**
 Handles all the network events happening in the browser. When type and enter the URL connects with the DNS server to resolve the IP for the address and connect with the actual remote server running and read all the contents through HTTP/HTTPS call.
 
**JavaScript interpreter:** Used to parse and execute JavaScript code.
  
**Data Persistance Layer:** Responsible to store the persistance data[local storage & Indexed Db] . Both are basically key value database to store the data in the browser side. Local Storage will have a straight forward simple key value pair logic. If we need to get into nested objects indexed DB is better way to store the data. 

![FlowChart1 drawio](https://user-images.githubusercontent.com/8068468/181430628-25b4991d-ff2a-48a9-8d62-8c3f19a77d20.png)

Consider we have a HTTP call and it serves all the Files from server. Now, what next happens in the browser,


![Flowchart2](https://user-images.githubusercontent.com/8068468/181513151-34e87cdc-7b5d-4e32-ad35-13ed65164f43.jpg)


![Flowchart4](https://user-images.githubusercontent.com/8068468/181513076-9a71ab54-1f5a-46c8-9c64-b20dbbfbbbda.jpg)

![Flowchart3](https://user-images.githubusercontent.com/8068468/181513116-3d943da4-6b8a-42c8-9354-e7a30ffe62b2.jpg)



![Flowchart5](https://user-images.githubusercontent.com/8068468/181513185-c619ec2a-9202-4822-a539-da7a4f1eaeeb.jpg)


