# kontakttagebuch (kontakttagebuch)

This is a contact journal where the user can document situations where one is potentially exposed to an infection. German virologist Christian Drosten [suggested this method](https://www.rnd.de/gesundheit/drostens-appell-wie-ein-kontakt-tagebuch-bei-der-virusbekampfung-helfen-kann-BFN5D2S55JBBDPBT4DIEXXZSTM.html) to help local authorities to trace contacts of confirmed CoViD-19 cases.

The app was made with the [Quasar Framework](https://quasar.dev/) using [Cordova](https://cordova.apache.org/) to convert the web app into a native mobile app (android-only for now). The internal state management was done using vuex, therefore no backend was really needed.

## Test the app
You can use the web interface by cloning this repository. Install quasar globally and start the app like this
```
npm install -g @quasar/cli
cd /path/to/app/
npm install
quasar dev
```
a browser window will oppen and you can use the web interface.

I also included a signed apk to test the mobile version (which was the main focus).

## Planned features
 - update contact on click on card
    - might be too annoying when you accidentally click on it all the time
    - maybe expand card => shows notes and reveals update button
        - maybe even move delete button there
- sort by
    - date
    - inside/outside
- push notification that reminds at a fixed time to update journal
- add inside/outside indicator
- settings page
    - block push notifications
    - set times to update
