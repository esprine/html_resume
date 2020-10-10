	var page = 0;
	var projects = "<div id=\"projects\" class=\"content\">" +
			"<p class=\"title\">프로젝트</p>" +
			"<p class=\"subtitle\">도서관 이용 및 관리 시스템</p>" +
			"<p class=\"contents\">java swing및 Oracle DB를 이용하여 <br> 도서관 대출 및 반납, 도서관에서 시행하는 문화강좌 등에 대한 수강 및 현황조회 등을 할 수 있는 프로그램을 개발하였습니다.<br>" +
			"해당 프로그램의 개발을 통해 프로그램 개발에 대한 UI구조 숙지 및<br> DB 테이블 설계 및 작성에서 오는 제약조건과 쿼리문에 대해 이해할 수 있었습니다.</p>" +
			"</div>";
	
	var education = "<div id=\"education\" class=\"content\">" +
					"<p class=\"title\">학력사항</p>" +
					"<table id=\"edu_table\">" +
					"<tr>" +
					"<td>일시</td><td>학력</td><td>졸업여부</td>" +
					"</tr>" +
					"<tr>" +
					"<td>2009.03 ~ 2012. 02</td><td>호산고등학교</td><td>졸업</td>" +
					"</tr>" +
					"</table>" +
					"</div>";
	
	
	var pageArr = Array(projects, education);
	
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(drawChart1);
	function drawChart1() { 
		var data1 = google.visualization.arrayToDataTable( 
				[
					["Programming","Rating"],["Java",100],["JavaScript",70],["Python",40],["Other",30]
				] );
		var options1 = { 	title: "Programming Language Skill", 
							titleTextStyle: {
								fontSize: 20
							},
							height: 300
					   };
		var chart1 = new google.visualization.PieChart(
				document.getElementById("language_skill_chart"));
		chart1.draw(data1, options1);
	}
	
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(drawChart2);
	function drawChart2() { 
		var data2 = google.visualization.arrayToDataTable( 
				[
					["Database","Rating"],["Oracle",100],["MySQL",70],["MariaDB",40],["MS-SQL",30],["Other", 20]
				] );
		var options2 = { 	title: "Database SQL Skill", 
							titleTextStyle: {
								fontSize: 20
							},
							height: 300
					   };
		var chart2 = new google.visualization.PieChart(
				document.getElementById("database_skill_chart"));
		chart2.draw(data2, options2);
	}
	
	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(drawChart3);
	function drawChart3() { 
		var data3 = google.visualization.arrayToDataTable( 
				[
					["Framework","Rating"],["Spring",100],["Vue.js",80],["node.js",50],["Django",20]
				] );
		var options3 = { 	title: "Framework Skill", 
							titleTextStyle: {
								fontSize: 20
							},
							height: 300
					   };
		var chart3 = new google.visualization.PieChart(
				document.getElementById("framework_skill_chart"));
		chart3.draw(data3, options3);
	}
	
	$(document).ready(function(){
		$('#header').load("div/header.html");
		$('#intro').load("div/intro.html");
		$('#skill').load("div/skill.html");
//		$('#projects').load("div/projects.html");
	});

	$(window).scroll(function() {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			$("#enters").append(pageArr[page]);
			page++;
		}
	});