(function(){
	var mydata = [
		{key:"1",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00",description:'What is Lorem Ipsum?'},
		{key:"2",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{key:"3",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{key:"4",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
		{key:"5",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{key:"6",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{key:"7",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00",description:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
		{key:"8",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{key:"9",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{key:"10",invdate:"2007-10-01",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00",description:'What is Lorem Ipsum?'},
		{key:"11",invdate:"2007-10-02",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{key:"12",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{key:"13",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00",description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. '},
		{key:"14",invdate:"2007-10-05",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{key:"15",invdate:"2007-09-06",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"},
		{key:"16",invdate:"2007-10-04",name:"test",note:"note",amount:"200.00",tax:"10.00",total:"210.00",description:'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'},
		{key:"17",invdate:"2007-10-03",name:"test2",note:"note2",amount:"300.00",tax:"20.00",total:"320.00"},
		{key:"18",invdate:"2007-09-01",name:"test3",note:"note3",amount:"400.00",tax:"30.00",total:"430.00"}
	];
	$(function(){
		$('.grid').Xgrid({
			data:mydata,
			colModels:[
				{key:'key',   width:60, sorttype:"int",label:'Inv No', sortable:true},
				{key:'invdate', width:90, sorttype:"date",label:'Date'},
				{key:'name', label:'Client',resizable:true},
				{key:'description', width:100,label:'Description',resizable:true},
				
				{key:'amount', width:80, align:"right",sorttype:"float",label:'Amount',hidden:true},
				{key:'tax', width:80, align:"right",sorttype:"float",label:'Tax'},
				{key:'total', width:80,align:"right",sorttype:"float",label:'Total'},
				{key:'note', width:150, sortable:true, label:'Notes'}
			],
		});
		console.log($('.grid').data('Xgrid'));
	});
})();