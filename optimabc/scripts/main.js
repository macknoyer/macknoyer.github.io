/*********************/
topbgmovev = topbgmove = 1
idhead = ''
/*********************/
function onload()
{
	moveHeadL()
	updateRmenu()
	chpl()
	chImgFloors()
	//keyPress()
}
function keyPress()
{
	window.captureEvents(Event.KEYPRESS); 
	window.onkeypress = pressed; 
    function pressed(e) { 
	console.log(e)
		switch(e.which)
		{
			case 27: g1.close();break;
			default: break;
		}
    }
}
function onscroll()
{
	//moveHead()
	rmenuPos()
}
$(function()
{
	onload()
	$(window).scroll(function(){onscroll()})
})
/*********************/
function chImgFloors()
{
	F = $('#Floors')
	if (F.length)
	{
		if (!F.find('.rg img').length)
		{
			F.find('.rg').css({position:'absolute',top:65,right:0})
			F.find('.lf').css({width:'auto'})
		}
	}
}
function moveHeadL()
{
	idhead = document.getElementById('head');
	if (idhead) $(window).scroll(function(){
		idhead.style.left = '-'+$(this).scrollLeft()+'px';
    });
}
function moveHead()
{
	idhead.css('top', $(window).scrollTop()+'px')
}
function chpl()
{
	$('input[type="text"], textarea').each(function(){
		pl = $(this).attr('placeholder')
		//console.log(this)
		if (!pl) return;
		$(this).attr('pl',pl)
		$(this).val(pl)
		$(this).removeAttr('placeholder')
		$(this).focusin(function()
		{
			vl = $(this).val()
			pl = $(this).attr('pl')
			if (vl==pl) $(this).val('')
		}).focusout(function()
		{
			vl = $(this).val()
			pl = $(this).attr('pl')
			if (vl=='') $(this).val(pl)
		})
	})
}
/*********************/
function updateRmenu()//Формирование правого меню
{
	mas = $('a[rel="rmenu"]')
	html = ''
	for (i=0;i<mas.length;i++)
	{
		item1 = mas.eq(i)
		name = ''
		if (item1.attr('name')) name = item1.attr('name')
		if (!name) name = 'rmenu_id_'+i
		item1.attr('name',name).attr('id',name)
		html += "<li pos='"+(i)+"' href='#"+name+"'><p>"+item1.attr('title')+"</p></li>"
		
	}
	if (html) $('#rmenu').html('<ul>'+html+'</ul><div class="sel"><br></div>')
	$('#rmenu li').click(function() {
		rmenuSet($(this).attr('pos'))
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 0,
            easing: "swing"
        });
        return false;
    });

}
function rmenuMove(i)
{
	v = 160 //пикс/с
	top1 = 46*i-3//($('#rmenu li').eq(i).position().top-3)
	topm = $('#rmenu .sel').position().top
	//console.log(top1+' '+topm)
	t = Math.abs(topm-top1)/v*1000
	$('#rmenu .sel').stop().animate({'top':(top1)+'px'},t) 
}
function rmenuSet(i)
{
	top1 = $('a[rel="rmenu"]').eq(i).offset().top
	//scrollTo(top1)
	rmenuMove(i)
}
function rmenuPos()
{
	mas = $('a[rel="rmenu"]')
	scroll = $(window).scrollTop()
	n = top = -1
	for (i=mas.length-1;i>=0;i--)
	{
		top1 = mas.eq(i).offset().top
		if(top1>=scroll) 
		{
			top = top1
			n = i
		}
	}
	if (n>=0)
	{
		rmenuMove(n)
	}
	
	
}
/*********************/
function moveAll(t)
{
	$(t).css({'left':'-100%'}).animate({'left':'0%'},90000,function(){moveAll(this)})
}
function bgmove(id,move,move1,name)
{
	this.id = id
	this.name = name
	this.move = move
	this.moveb = $(this.move)
	this.move1 = move1
	this.moveb1 = $(this.move1)
	this.stpos = 60
	this.time = 1500
	this.bllock = $(id)
	// *
	// this.moveb.addClass('slowan')
	// this.moveb1.addClass('slowan')
	//moveAll(this.moveb1.find('#topbg11'))
	$(window).scroll({'name':this.name,'id1':this.move.replace('#',''),'id2':this.move1.replace('#','')},function(eventObject)
	{
		//setTimeout(eventObject.data.name+'.onScroll()',0)
		sct = $(window).scrollTop()
		h = sct*0.3-80
		//if (h>50) h=50
		document.getElementById(eventObject.data.id1).style.top = (0-h)+'px'
		document.getElementById(eventObject.data.id2).style.top = (0-h*0.4)+'px'
	}).scroll()
	//this.onScroll()
	/*block.mousemove({"mod":"bgmove", "id":this.id, "move":this.move},function(eventObject)
	{
		lf = ((eventObject.pageX*100/$('#wrap').width())-50)
		if (Math.abs(lf)<25) 
		{
			topbgmovev=0
			return
		}
		topbgmovev=lf
	})
	this.tim = setInterval(function(){
		if (!topbgmove) return
		topbgmove -=topbgmovev*0.05
		if (topbgmove<=-1862) topbgmove +=1862*2
		else if (topbgmove>=1862) topbgmove -=1862*2 
		$('#topbg').css({'left': Math.round(topbgmove-10000)+'px'})
	},13)
	*/
}
function slid1(id,name,data)
{
	/*Главные настройки*/
	this.id = id
	this.name = name
	this.time = 1000
	this.time1 = this.time*1.3
	this.dtime = this.time
	this.dtime1 = this.time1
	this.timek1 = 0.3
	this.animate = 1
	this.move = 1
	this.nav = 1
	this.title = 1
	this.show = 0
	/*Основные размеры*/
	this.x01 = 15
	this.x02 = 80
	this.x1 = 45
	this.x2 = 240
	this.x3 = 525
	this.y0 = 240
	this.y1 = 65
	this.y2 = 110
	this.w1 = 360
	this.w2 = 450
	this.z1 = 90
	this.z2 = 100
	this.p1 = 30
	this.p2 = 40
	/*Начало расчёта*/
	this.block = $(this.id)
	this.mas = this.block.find('li')
	this.count = this.mas.length
	this.list = []
	this.item = []
	this.href = [];
	
	if (!this.count) {console.log('no-img'); return;}
	for (var i in data)
	{
		this[i] = data[i]
	}
	for(i=0;i<this.mas.length;i++)
	{
		this.list[i] = this.mas.eq(i).html();
		this.href[i] = this.mas.eq(i).attr('href');
	}
	this.workspace = $("<div class='slidlist'></div>").insertAfter(this.block)
	/*Внутренние функции*/
	this.offset = function(n)
	{
		count = this.count
		find = this.show+n
		temp = (Math.abs(find)/count|0)
		if (find>count-1) 
		{
			find -=  (temp?temp:1)*count
		}
		else if(find<0)
		{
			find += (temp?temp:1)*count
		}
		//console.log(this.show+' + '+n+' = '+find )
		return find
	}
	this.blockhtml = function(n)
	{
		//console.log(this.list[n])
		if(this.href[n]===undefined) return "<div class='pos'><div class='bg'><div class='img'>"+this.list[n]+"</div></div></div>";
		return "<div class='pos'><div class='bg'><a href='"+this.href[n]+"'><div class='img' style='background-image:url("+$(this.list[n]).attr('src')+")'>"+this.list[n]+"</div></a></div></div>";
	}
	this.style = function(pos)
	{
		switch(pos)
		{
			case 0:
			case 1: t1=this.y2;t2=this.x1;t3=this.w1;t4=this.z1;t5=this.p1;break;
			case 2: t1=this.y1;t2=this.x2;t3=this.w2;t4=this.z1+5;t5=this.p2;;break;
			case 3:
			case 4: t1=this.y2;t2=this.x3;t3=this.w1;t4=this.z1;t5=this.p1;break;
		}
		switch(pos)
		{
			case 0:
			case 4: t4=this.z1-5;break;
		}
		
		return {'top':t1+'px','left':t2+'px','width':t3+'px','z-index':t4,'padding-bottom':t5+'px'}
	}
	this.prevEnd = function()
	{
		this.item['block3'] = this.item['block2'].css(this.style(3))
		this.item['block2'] = this.item['block1'].css(this.style(2))
		this.item['block1'] = this.item['block0'].css(this.style(1))
		this.show = this.offset(-1)
		this.animate--
		this.End()
		if (this.animate) this.prev(this.animate)
	}
	this.nextEnd = function()
	{
		this.item['block1'] = this.item['block2'].css(this.style(1))
		this.item['block2'] = this.item['block3'].css(this.style(2))
		this.item['block3'] = this.item['block4'].css(this.style(3))
		this.show = this.offset(1)
		this.animate--
		this.End()
		if (this.animate) this.next(this.animate)
	}
	this.moveEnd = function()
	{
		this.animate--
		for (i=1;i<4;i++)
		{
			this.item['block'+i].find('.img').attr('style','')
		}
		this.End()
	}
	this.updateNav = function()
	{
		this.item['nav'].find('li').removeClass('sel').eq(this.show).addClass('sel')
	}
	this.updateTitle = function()
	{
		html = this.mas.eq(this.show).find('img').attr('alt')
		if (html) this.item['title'].html(html).fadeIn(this.time*0.2)
	}
	this.End = function()
	{
		if (!this.animate)
		{
			this.time = this.dtime
			this.time1 = this.dtime1
		}
		
		if (this.nav) {this.updateNav()}
		if (this.title&&!this.animate) {this.updateTitle()}
	}
	this.Strt = function()
	{
		if (this.title) {this.item['title'].fadeOut(this.time*0.5)}
	}
	/*Внешние*/
	this.create = function()
	{
		if (this.nav)
		{
			this.item['nav'] = $("<ul class='nav'></ul>").appendTo(this.workspace)
			for(i=0;i<this.count;i++)
			{
				$("<li onclick='"+this.name+".move("+i+")'><br></li>").appendTo(this.item['nav'])
			}
			this.updateNav()
		}
		if (this.move)
		{
			this.item['left'] = $("<div class='right' onclick='"+this.name+".next()'><br></div>").appendTo(this.workspace).css({'z-index':this.z1+5})
			this.item['right'] = $("<div class='left' onclick='"+this.name+".prev()'></div>").appendTo(this.workspace).css({'z-index':this.z1+5})
		}
		if (this.title)
		{
			this.item['title'] = $("<div class='title'></div>").appendTo(this.workspace)
			this.item['title'].wrap("<div class='center'></div>")
			this.updateTitle()
		}
		if (this.shd)
		{
			this.item['shd'] = $("<div class='shd shd1'></div><div class='shd shd2'></div><div class='shd shd3'></div>").appendTo(this.workspace)
		}
		this.item['block1'] = $(this.blockhtml(this.offset(-1))).appendTo(this.workspace).css(this.style(1))
		this.item['block2'] = $(this.blockhtml(this.offset(0))).appendTo(this.workspace).css(this.style(2))
		this.item['block3'] = $(this.blockhtml(this.offset(1))).appendTo(this.workspace).css(this.style(3))
		this.animate = 0
		this.dtime = this.time
		this.dtime1 = this.time1
	
	}
	this.move = function(w)
	{
		if (w==this.show||this.animate)	return
		this.Strt()
		this.animate = 1
		this.show = w
		//time21 = this.time*0.45
		//time22 = this.time*0.55
		
		for (i=1;i<4;i++)
		{
			n = this.item['block'+i].find('img').animate({'margin-top':'-100%'},this.time,function(){$(this).remove()})
			n.parent().css({'max-height':n.width()+'px'})
			//console.log(this.blockhtml(this.offset(i-2)))
			$($(this.blockhtml(this.offset(i-2))).find('img')[0].outerHTML).
			insertAfter(n)//.css({'top':'100%'}).delay(time21).css({'top':'100%'},time22)
		}
		setTimeout(this.name+'.moveEnd()',this.time)
	}
	this.prev = function(a)
	{
		if (this.animate&&!a) return;
		this.Strt()
		this.animate = a?a:1
		this.item['block0'] = $(this.blockhtml(this.offset(-2))).appendTo(this.workspace).hide().fadeIn(this.time*0.5).css(this.style(0))
		this.item['block1'].delay(this.time*this.timek1).animate({'z-index':this.z1+5},0).animate(this.style(2),this.time)
		this.item['block2'].animate(this.style(3),this.time)
		this.item['block3'].animate(this.style(4),this.time).delay(this.time*0.5).fadeOut(this.time,function(){$(this.remove())})
		setTimeout(this.name+'.prevEnd()',this.time1)
	}
	this.next = function(a)
	{
		if (this.animate&&!a) return;
		this.Strt()
		this.animate = a?a:1
		this.item['block4'] = $(this.blockhtml(this.offset(2))).appendTo(this.workspace).hide().fadeIn(this.time*0.5).css(this.style(4))
		this.item['block3'].delay(this.time*this.timek1).animate({'z-index':this.z1+5},0).animate(this.style(2),this.time)
		this.item['block2'].animate(this.style(1),this.time)
		this.item['block1'].animate(this.style(0),this.time).delay(this.time*0.5).fadeOut(this.time,function(){$(this.remove())})
		setTimeout(this.name+'.nextEnd()',this.time1)
	}
	/*Запуск функций*/
	this.create()
}
/*********************/
function tabs(from,to,name)
{
	this.name = name
	this.from = from
	this.to = to
	this.bfrom = $(this.from).find('li')
	this.bto= $(this.to).find('li')
	if (this.bfrom.length!=this.bto.length) return
	this.bfrom.attr('rel',this.name).click(function(){setTimeout($(this).attr('rel')+'.set('+$(this).attr('value')+')',0)})
	for (i=0;i<this.bfrom.length;i++)
	{
		this.bfrom.eq(i).attr('value',i)
	}
	this.set = function(n)
	{
		this.bfrom.removeClass('sel').eq(n).addClass('sel')
		this.bto.removeClass('sel').fadeOut().eq(n).stop().fadeIn()//addClass('sel')
	}
	this.set(0)
	
}
/*********************/
function gallery(id,name,data)
{
	this.id = id
	this.name = name
	this.data = data
	this.item = []
	this.block = $(id)
	this.list = this.block.find('img')
	
	this.show = 0
	this.page_show = 0
	this.onshow = 0
	this.pages = 0
	this.time = 250
	this.perlist = 9
	this.count = this.list.length
	
	if (!this.count) return;
	
	this.offset = function(n)
	{
		count = this.count
		find = this.show+n
		temp = (Math.abs(find)/count|0)
		if (find>count-1) 
		{
			find -=  (temp?temp:1)*count
		}
		else if(find<0)
		{
			find += (temp?temp:1)*count
		}
		//console.log(this.show+' + '+n+' = '+find )
		return find
	}
	this.chpageM = function(n)
	{
		count = this.pages
		find = this.page_show+n
		temp = (Math.abs(find)/count|0)
		if (find>count-1) 
		{
			find -=  (temp?temp:1)*count
		}
		else if(find<0)
		{
			find += (temp?temp:1)*count
		}
		
		this.chpage(find)
	}
	this.chpage = function(n)
	{
		this.item['pages_list'].removeClass('sel').eq(n+1).addClass('sel')
		this.page_show = n
		//this.list.html('')
		html = ''
		min = this.page_show*this.perlist
		max = (this.page_show+1)*this.perlist
		if (max>this.count) max = this.count
		for (i=min;i<max;i++)
		{
			item1 = this.list.eq(i)
			html += "<div class='p1'><div class='p'><div class='bg' onclick='"+this.name+".showf("+i+")'><div class='img' style='background-image:url("+item1.attr('src')+")'><img src='"+item1.attr('src')+"'><div class='eff'></div></div></div><p><a href='/?issue_id=6&photo="+item1.attr('photoid')+"'>"+item1.attr('title')+"</a></p></div></div>"
		}
		this.item['list'].html(html)
	}
	this.next = function(n)
	{
		this.show = this.offset(n)
		this.show_img()
	}
	this.showf = function(n)
	{
		this.show = n
		if (!this.onshow) this.item['show'].fadeIn()
		this.onshow = 1
		
		$('body').css({'overflow':'hidden','height':'100%'})
		$('html').css({'overflow':'hidden','height':'100%'})
		
		// html = "<div class='photo_show'>"
		// html += "<div class='ext' onclick='"+this.name+".close()'></div>"
		// html += "<div class='left' onclick='"+this.name+".next(-1)'></div>"
		// html += "<div class='right' onclick='"+this.name+".next(1)'></div>"
		// html += "<div class='center'></div>"
		// html += "</div>"
		
		// this.item['cont'].html(html)
		this.show_img()
		this.resize()
	}
	this.show_img = function()
	{
		
		
		showpage = (this.show/this.perlist|0)
		if (showpage!=this.page_show) this.chpage(showpage)
		
		item1 = this.list.eq(this.show)
		//html = "<div class='img'><h2>"+item.attr('title')+"</h2><div class='bg'><img src='"+item.attr('maxsrc')+"'><div class='eff'></div></div><p>"+item.attr('alt')+"</p></div>"
		//this.item['cont'].find('.img').fadeOut(this.time)
		//$(html).appendTo(this.item['cont'].find('.center')).css('display','none').delay(this.time).fadeIn(this.time)
		this.item['pp1'].html(item1.attr('title'))
		this.item['pp2'].html(item1.attr('alt'))
		this.item['mimg'].attr('src',item1.attr('maxsrc'))
	}
	this.close = function()
	{
		this.item['show'].fadeOut()
		this.onshow = 0
		
		$('body').css({'overflow':'auto','height':'auto'})
		$('html').css({'overflow':'auto','height':'auto'})
	}
	this.stpages = function()
	{
		html = ''
		html += "<li onclick='"+this.name+".chpageM(-1)' class='Ml'></li>"
		for (i=0; i<this.pages; i++) 
		{
			html += "<li onclick='"+this.name+".chpage("+i+")'>"+(i+1)+"</li>"
		}
		html += "<li onclick='"+this.name+".chpageM(1)' class='Mr'></li>"
		this.item['pages'] = $("<ul class='pages'><p>Страница</p></ul>").insertAfter(this.block)
		this.item['pages_list'] = $(html).appendTo(this.item['pages'])
		
		if (this.pages==1) this.item['pages'].hide()
	}
	this.resize= function()
	{
		w = $(window)
		this.item['pht'].height(w.height()-120).width(w.width())
		this.item['show'].find('.left,.right').height(w.height())
	}
	this.mleft = function()
	{
		m = this.item['slid_p'].find('img').not('.act')
		b = m.eq(-1)
		this.item['slid_p'].prepend(b.clone().width(0).animate({'width':b.width()},this.time))
		b.addClass('act').animate({'width':0},this.time,function(){$(this).remove()})
	}
	this.mright = function()
	{
		m = this.item['slid_p'].find('img').not('.act')
		b = m.eq(0)
		this.item['slid_p'].append(b.clone().width(0).animate({'width':b.width()},this.time))
		b.addClass('act').animate({'width':0},this.time,function(){$(this).remove()})
	}
	this.msel = function(n)
	{
		this.show = n
		this.show_img()
	}
	this.start = function()
	{
		this.block.css('display','none')
		this.pages = (this.count/this.perlist|0)
		if (this.pages*this.perlist!=this.count) this.pages++
		this.stpages()
		this.item['list'] = $("<div class='list'></div>").insertAfter(this.block)
		//this.item['show'] = $("<div class='show1'><table class='show'><tr><td><div class='bg1'><div class='bg2'><div class='cont'></div></div></div></td></tr></table></div>").insertAfter(this.block)
		//this.item['show'] = $("<div class='show1'><div class='tit'></div><div class='dsc'></div><div class='pht'></div><div class='slid'></div><div class='mtl'></div><div class='mtr'></div></div>").insertAfter(this.block)
		this.item['show'] = $("<div class='show1'>"+
		"<div class='tit'><a href='#' class='glogo'></a><div class='ext' onclick='"+this.name+".close()'></div></div>"+
		"<div class='dsc'><div class='pp1'></div><div class='pp2'></div></div>"+
		"<div class='pht'><img class='mimg'><div class='left' onclick='"+this.name+".next(-1)'></div><div class='right' onclick='"+this.name+".next(1)'></div></div>"+
		"<div class='slid'><div class='tr'></div><div class='tl'></div><div class='par'></div></div>"+
		"</div>").insertAfter(this.block)
		this.item['pht'] = this.item['show'].find('.pht')
		this.item['pp1'] = this.item['show'].find('.pp1')
		this.item['pp2'] = this.item['show'].find('.pp2')
		this.item['mimg'] = this.item['show'].find('.mimg')
		this.item['slid'] = this.item['show'].find('.slid')
		this.item['slid_p'] = this.item['slid'].find('.par')
		this.item['slid_tl'] = this.item['slid'].find('.tl')
		this.item['slid_tr'] = this.item['slid'].find('.tr')
		this.item['slid_p'].html($('#photo_list').html())
		var gNum=0
		var gName=this.name
	this.item['slid_p'].find('img').each(function(){$(this).attr('onclick',gName+".msel("+(gNum++)+")")})
		this.chpage(this.page_show)
		
		this.item['slid_tr'].attr('onclick',this.name+".mright()")
		this.item['slid_tl'].attr('onclick',this.name+".mleft()")
		this.chpage(this.data.page-1)
		$(window).resize(function(){g1.resize()})
		$(window).on('keydown', function(e) {
			console.log(e)
			if (e.keyCode == 27) {g1.close()}
			if (e.keyCode == 37) {g1.next(-1)}
			if (e.keyCode == 39) {g1.next(1)}
		});
	}
	this.start()
	
}
function plan(id,idm,idt,name,data)
{
	
	this.id = id
	this.idm = idm
	this.idm = idt
	this.name = name
	this.block = $(id)	
	this.blockm = $(idm)	
	this.blockt = $(idt).find('li')
	this.mcl =this.blockm.attr('class')		
	this.cl = this.block.attr('class')	
	this.h = this.block.height()	
	
	this.x = 0
	this.y = 0
	this.dlx = 270
	this.dly = 415
	this.limp = 580
	this.limm = -150
	this.mas_y = [0,85,155,230,300,390]
	this.mas_x_p = [0,-0.07,-0.13,-0.25,-0.27,-0.42]
	this.mas_x_m = [0,0.08,0.2,0.35,0.48,0.68]
	this.floor_s = 3;
	this.floor_h = 0
	for (var i in data)
	{
		this[i] = data[i]
	}
	this.check = function()
	{
		x = this.x - this.dlx
		y = this.dly - this.y
		if(x>this.limp||x<this.limm||y<=0)
		{
			floor = 0
		}
		else
		{
			floor = 0
			mas_x = x>=0?this.mas_x_p:this.mas_x_m
			for (i=this.mas_y.length-1;i>=0;i--)
			{
				if ((mas_x[i]*x+this.mas_y[i])>=y) floor = i
			}
		}
		return floor
	}
	this.over = function(x,y)
	{
		offset = this.block.offset()
		this.x = x - offset.left
		this.y = y - offset.top
		//console.log(Date.now()-this.timer);this.timer = Date.now()
	}
	this.over_ch = function()
	{	
		//console.log(this.x+' '+this.y)
		floor = this.check()
		if (this.floor_h!=floor) 
		{
			this.floor_h=floor
			this.updateClass()
		}
	}
	this.click = function()
	{
		floor = this.check()
		if (this.floor_s!=floor) 
		{
			this.floor_s=floor
			this.updateClass()
		}
	}
	this.sel = function(floor)
	{
		if (this.floor_s!=floor) 
		{
			this.floor_s=floor
			this.updateClass()
			if (this.chref)
			{
				document.location.href = this.blockt.eq(this.floor_s-1).find('a').attr('href')
			}
		}
		$('html, body').animate({scrollTop: $('.tabs').offset().top}, 'fast');
	}
	this.movel = function()
	{
		b = $('.tabs .sel').prev()
		if (!b.length) b = $('.tabs li').eq(-1)
		document.location.href = b.find('a').attr('href')
	}
	this.mover = function()
	{
		b = $('.tabs .sel').next()
		if (!b.length) b = $('.tabs li').eq(0)
		document.location.href = b.find('a').attr('href')
	}
	this.selh = function(floor)
	{
		if (this.floor_h!=floor) 
		{
			this.floor_h=floor
			this.updateClass()
		}
	}
	this.updateClass = function()
	{
		c = this.cl
		c+=' self'+this.floor_s
		if (this.floor_s!=this.floor_h) c+=' self'+this.floor_h
		this.block.attr('class',c)
		
		mc = this.mcl
		mc+=' floor'+this.floor_s
		this.blockm.attr('class',mc)
		
		if (this.floor_s) this.blockt.removeClass('sel').eq(this.floor_s-1).addClass('sel')
		
		this.block.css('cursor',this.floor_h?'pointer':'default')
		//console.log('hover '+this.floor_h)
	}
	this.start = function()
	{
		if (supports('mozTransform')||supports('msTransform')||supports('oTransform')||supports('webkitTransform')||supports('transform'))
		{
			$(this.id+' .hov').mouseenter({"id":this.id, "name":this.name},function(e){
				setTimeout(e.data.name+".selh("+$(this).attr('value')+")",0)
			}).mouseout({"id":this.id, "name":this.name},function(e){
				setTimeout(e.data.name+".selh(0)",0)
			}).click({"id":this.id, "name":this.name},function(e){
				//console.log(e.data.name)
				setTimeout(e.data.name+".sel("+$(this).attr('value')+")",0)
			})
		}
		else{
			$(this.id+' .hov').css('display','none')
			this.block.mousemove({"id":this.id, "name":this.name},function(e)
			{
				setTimeout(e.data.name+".over("+e.pageX+","+e.pageY+")",0)
			})
			setInterval(this.name+".over_ch()",13)
			this.block.click({"id":this.id, "name":this.name},function(e)
			{
				setTimeout(e.data.name+".click()",0)
			})		
		}
		this.blockm.find('.selfa .blp').each(function(k,e){$(this).css('left',(0-($(this).width()/2-$(this).parent().width()/2)))+'px'})
		this.updateClass()
	}
	this.start()
	
}
/*********************/
function supports(prop)
{
	if ( prop in $('div')[0].style ) return true;
	else return false;
}
/*********************/
function scrollTo(destination)
{
	$('body').scrollTop(destination)
}
function animateTop()
{
	//$('#topinfo').animate({'backgr'})
}
