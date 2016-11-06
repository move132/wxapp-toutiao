	/***************************\ 	
	*  						    *		
	*    =,    (\_/)    ,=      *
	*     /`-'--(")--'-'\		*	
	*    /     (___)     \	    *	
	*   /.-.-./ " " \.-.-.\	 	*
	*   email:move11@126.com    *
	\***************************/
(function(global){
	var current=localStorage["__current__"] || 0;
	var contexts=["page", "frame", "selection", "link", "editable", "image", "video", "audio", "browser_action"];
	for(var i=0; i< contexts.length; i ++){ console.log(contexts[i]);
		chrome.contextMenus.create({
            id:contexts[i],
            title: "图像模糊处理"+contexts[i],
            contexts:[contexts[i]]  // ["all", "page", "frame", "selection", "link", "editable", "image", "video", "audio"]
            //type:['radio']//"normal", "checkbox", "radio", or "separator"
		});
 
	}



	//监听右键菜单，一旦被点击，则通知前台
	chrome.contextMenus.onClicked.addListener(function (object,tab,aa) {
		

		var arr=["page", "frame", "selection", "link", "editable", "image", "video", "audio"];
		// Send a message to the active tab
		chrome.tabs.query({
			active : true,
			currentWindow : true
		}, function (tabs) {
			var activeTab = tabs[0];
			//chrome.tabs.sendMessage(activeTab.id, {"message": transstorage});
			for (var i = 0; i < 1; i++) {
				 
				chrome.tabs.sendMessage(activeTab.id, {
					"channelmsg" : current
				});
			}
		});
		
		chrome.extension.getBackgroundPage().createEmptyTab();
		//chrome.extension.getBackgroundPage().removeTab();
		//chrome.extension.getBackgroundPage().inter();
		//chrome.extension.getBackgroundPage().createWindow();
	});


    chrome.notifications.onClicked.addListener(function(a){
        alert(a);
    });

    chrome.notifications.onButtonClicked.addListener(function(notificationId, buttonIndex) {
        alert(notificationId+'_____'+buttonIndex);
        chrome.notifications.getAll(function(notifications_obj){
            console.log(notifications_obj);
        });
    });
 	

	

})(window)
