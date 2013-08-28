$$('#bar').tap(function() {
	Lungo.Notification.confirm({
	    icon: 'user',
	    title: 'Chat de la disco',
	    description: 'Chatea con los demas',
	    accept: {
	        icon: 'checkmark',
	        label: 'Ir',
	        callback: function(){ 
	        	Lungo.Router.article("second","chat");
	    	}
	    },
	    cancel: {
	        icon: 'close',
	        label: 'No',
	        callback: function(){}
	    }
	});
});

$$('#taxi').tap(function() {
	Lungo.Notification.confirm({
	    icon: 'warning-sign',
	    title: 'Ya te vas?',
	    accept: {
	        label: 'Conductor',
	        callback: function(){ 
	        	Lungo.Router.section("sect-seVa");
	    	}
	    },
	    cancel: {
	        icon: 'close',
	        label: 'Cancelar'
	    }
	});
});

$$('#telefono').tap(function() {
	Lungo.Notification.confirm({
	    icon: 'phone',
	    title: 'Encuentra mas infomacion',
	    description: 'Tel: 3346274, Dir: Cll 21 N°12-56 :)',
	    accept: {
	        icon: 'address',
	        label: 'OK',
	        callback: function(){ 
	        	Lungo.Router.article("reservar","res");
	    	}
	    },
	    cancel: {
	        icon: 'close',
	        label: 'Cancelar',
	        callback: function(){
	        	Lungo.Router.article("reservar","res");
	        }
	    }
	});
});

$$('#comprar').tap(function() {
	Lungo.Notification.confirm({
	    icon: 'clock',
	    title: 'Reservar mi entrada',
	    description: 'Valor: $27.000',
	    accept: {
	        icon: 'address',
	        label: 'Reservar',
	        callback: function(){ 
	        	alert("Gracias, Disfruta tu Evento :)");
	    	}
	    },
	    cancel: {
	        icon: 'close',
	        label: 'Cancelar',
	        callback: function(){
	        	Lungo.Router.article("reservar","res");
	        }
	    }
	});
});

$$('#panic').tap(function() {
	Lungo.Notification.success("Entendido", "Hemos alertado a las autoridades", "check", 5);
});

$$('#liDesignado').tap(function() {
	Lungo.Notification.success("Exito", "En minutos llegara tu conductor designado", "thumbs-up", 5);
});

$$('#liAmigo').tap(function() {
	Lungo.Notification.success("Exito", "Espera un poco ya vendra alguien de tu confianza por ti", "thumbs-up",5);
});



$$('#configPanic').tap(function() {
	Lungo.Router.article("ConfigSect","FormConfigPanic");
});

$$('#chatAdmin').tap(function() {
	Lungo.Router.article("ChatSect","FormChatadmin");
});
$$('#listClubs').tap(function() {
	Lungo.Router.section("sect-Clubs");
});
$$('#liGeneros').tap(function() {
	Lungo.Router.section("generos");
});
$$('#liAmigos').tap(function() {
	Lungo.Router.section("amigos");
});
$$('#liRecomen').tap(function() {
	Lungo.Router.section("recomendados");
});
$$('#liPrecios').tap(function() {
	Lungo.Router.section("Precios");
});
