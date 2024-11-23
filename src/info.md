## wireframe of project
    
    `https://wireframe.cc/pro/pp/b9ea8eee5846040`




Routes Component -> multiple route component
Inside Routes component we store all individual route component



synthetic event : custom event object that react gives us

mouseup
mousedown
click 
blur


event bubbling

react-router get url and query params
useSearchParam
useParam


For storage we use 
1. Cookies : problem with cookies is cookies are generally sent over network
other storage area inside browser where if u store something it store insides browser . these web storage are not sent over network/s
sever where we sent request that is why we store more data here

Browser => inspect => application => local storage , session storage  . Both are like key-value store

if we refresh the page data still persist.

if u open new tab in local storage data persist but in session storage data is gone


Data doesn't expire in local storage
session storage do not share data between multiple tabs , windows etc


Browser provides some simple api local storage 
example : localstorage.getItem();


Usecase of session storage : it will persists data for particular session or particular tab when we want to store too much data we
can use session storage. beacuse cookies can't store that much amount of data. useful for security purpose


## Accordian