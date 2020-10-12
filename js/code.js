var page = 0;
	var projects = "<div id=\"projects\" class=\"content\">" +
			"<p class=\"title\">프로젝트</p>" +
			"<p class=\"subtitle\">여행 계획 작성 모바일 어플리케이션</p>" +
			"<p class=\"contents\">내용</p>" +
			"<p class=\"subtitle\">설문조사 웹사이트</p>" +
			"<p class=\"contents\">내용</p>" +
			"<p class=\"subtitle\">도서관 이용 및 관리 프로그램</p>" +
	    		"<table>" +
	    		"<tr>" +
	    		"<td><img src=\"https://raw.githubusercontent.com/esprine/html_resume/issue1/img/lib_project.png\"></td>" +
			"<td><p class=\"contents\">java swing및 Oracle DB를 이용하여 <br> 도서관 대출 및 반납, 도서관에서 시행하는 문화강좌 등에 대한 수강 및 현황조회 등을 할 수 있는 프로그램을 개발하였습니다.<br>" +
			"해당 프로그램의 개발을 통해 프로그램 개발에 대한 UI구조 숙지 및<br> DB 테이블 설계 및 작성에서 오는 제약조건과 쿼리문에 대해 이해할 수 있었습니다.</p></td>" +
	    		"</tr>" +
	    		"</table>" +
			"</div>";
	
	var education = "<div id=\"education\" class=\"content\">" +
					"<p class=\"title\">학력 및 병역사항</p>" +
					"<table id=\"edu_table\">" +
					"<tr>" +
					"<td>일시</td><td>학력</td><td>졸업여부</td>" +
					"</tr>" +
					"<tr>" +
					"<td>2009.03 ~ 2012. 02</td><td>호산고등학교</td><td>졸업</td>" +
					"</tr>" +
					"<tr>" +
					"<td>2012.03 ~ 2020. 08</td><td>경북대학교 IT대학 컴퓨터학부</td><td>졸업</td>" +
					"</tr>" +
					"<tr>" +
					"<td>2014.11 ~ 2016. 08</td><td>육군 편성보급병</td><td>병장 만기제대</td>" +
					"</tr>" +
					"<tr>" +
					"<td>2020.05 ~ 2020. 11</td><td>한국능력개발교육원 JAVA컨버전스 과정</td><td>수료</td>" +
					"</tr>" +
					"</table>" +
				"</div>";
	
	
	var pageArr = Array(projects, education);
	
	$(document).ready(function(){
		$('#header').load("div/header.html");
		$('#intro').load("div/intro.html");
		//$('#skill').load("div/skill.html");
		
		while ($("body").height() < $(window).height()) {
	        $("#enters").append(pageArr[page]);
			page++;
	    }
	});

	google.load("visualization", "1", {packages:["corechart"]});
	google.setOnLoadCallback(drawChart);
	function drawChart() { 
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

	$(window).scroll(function() {
		if ($(window).scrollTop() == $(document).height() - $(window).height()) {
			$("#enters").append(pageArr[page]);
			page++;
		}
	});
