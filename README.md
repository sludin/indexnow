## indexnow

Simple example of submitting urls to Bing's IndexNow service

### Install
    yarn install
or

    npm install

### API Key

Get the key from <a href="https://www.bing.com/indexnow">IndexNow</a> and put it in a file at the root
of your site with the name being the key with a .txt extension.  For example:

    Key: c9e44b0436e74ce1952da7a7922dc8f7 
    File content: c9e44b0436e74ce1952da7a7922dc8f7 
    File name: c9e44b0436e74ce1952da7a7922dc8f7.txt
    URL: https://example.com/c9e44b0436e74ce1952da7a7922dc8f7.txt

### Running

    node src/index.js HOSTNAME KEY URL_FILE
   
- HOSTNAME: The hostname of your site
- KEY: The IndexNow API key.  Fetch from <a href="https://www.bing.com/indexnow">IndexNow</a>
- URL_FILE: A newline delimited file of the URLs you want to submit

### Example

URL File (urls.txt):

    https://www.ludin.org
    https://www.ludin.org/gallery.html
    https://www.ludin.org/about.html
    https://www.ludin.org/contact.html

Hostname: www.ludin.org

Key: <key from <a href="https://www.bing.com/indexnow">IndexNow</a> >.  For example: c9e44b0436e74ce1952da7a7922dc8f7 

    node src/index.js www.ludin.org c9e44b0436e74ce1952da7a7922dc8f7 urls.txt
    
 


