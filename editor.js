window.onload = function init() {
    window.Pictures = document.getElementById("Pictures");
    window.Online_Class = document.getElementById("Online-Class");
    window.Weighted = document.getElementById("Weighted");
    window.College_Credit = document.getElementById("College-Credit");
    window.Gold_Medallion = document.getElementById("Gold-Medallion");
    window.Off_Campus = document.getElementById("Off-Campus");
    window.IB = document.getElementById("IB");

    document.getElementById("Course_T").value = document.getElementById("Course").innerHTML;
    var departmentTemp = document.getElementById("Department").innerHTML
    document.getElementById("Department_T").value = departmentTemp.substring(departmentTemp.lastIndexOf("<"),departmentTemp.substring(0,departmentTemp.length-1).lastIndexOf(">") + 1);
    document.getElementById("Department_L").value = departmentTemp.substring(departmentTemp.indexOf("=")+2,departmentTemp.indexOf(">")-1);
    document.getElementById("CourseID_T").value = document.getElementById("CourseID").innerHTML.slice(11);
    document.getElementById("Credits_T").value = document.getElementById("Credits").innerHTML.slice(8);
	document.getElementById("Grade-Levels_T").value = document.getElementById("Grade-Levels").innerHTML.slice(13);
	document.getElementById("Prerequisite_T").value = document.getElementById("Prerequisite").innerHTML.slice(14);

    courseName = document.getElementById("Course_T");
    window.courseName.onkeyup = function() {
        document.getElementById("Course").innerHTML = courseName.value;
    }
//<a href="https://www.nkcschools.org/Page/4815">Practical Arts - Journalism</a>
    department = document.getElementById("Department_T");
    departmentL = document.getElementById("Department_L");

    window.department.onkeyup = function() {
        document.getElementById("Department").innerHTML = makeLink(departmentL.value,department.value);
    }

    window.departmentL.onkeyup = function() {
        document.getElementById("Department").innerHTML = makeLink(departmentL.value,department.value);
    }

    courseID = document.getElementById("CourseID_T");
    window.courseID.onkeyup = function() {
        document.getElementById("CourseID").innerHTML = "Course ID: " + courseID.value;
    }

    credits = document.getElementById("Credits_T");
    window.credits.onkeyup = function() {
        document.getElementById("Credits").innerHTML = "Credit: " + credits.value;
    }

    gradeLevels = document.getElementById("Grade-Levels_T");
    window.gradeLevels.onkeyup = function() {
        document.getElementById("Grade-Levels").innerHTML = "Grade level: " + gradeLevels.value;
    }

    prerequisite = document.getElementById("Prerequisite_T");
    window.prerequisite.onkeyup = function() {
        document.getElementById("Prerequisite").innerHTML = "Prerequisite: " + prerequisite.value;
    }

    preReq_Link = document.getElementById("Link_T");
    preReq = document.getElementById("Prereq_T");

    window.preReq_Link.onkeyup = function() {
        updateLink();
    }
    window.preReq.onkeyup = function() {
        updateLink();
    }
}

function updateLink() {
	document.getElementById("output").value = "<a href=\"" + preReq_Link.value + "\">" + preReq.value + "</a>";

}

function makeLink(link, text) {
    return "<a href=\"" + link + "\">" + text + "</a>";
}

function update() {
    removeChildren(document.getElementById("Pictures"));
    if (document.getElementById("Online-Class_C").checked) {
        Pictures.append(window.Online_Class);
    }
    if (document.getElementById("Weighted_C").checked) {
        Pictures.append(window.Weighted);
    }
    if (document.getElementById("College-Credit_C").checked) {
        Pictures.append(window.College_Credit);
    }
    if (document.getElementById("Gold-Medallion_C").checked) {
        Pictures.append(window.Gold_Medallion);
    }
    if (document.getElementById("Off-Campus_C").checked) {
        Pictures.append(window.Off_Campus);
    }
    if (document.getElementById("IB_C").checked) {
        Pictures.append(window.IB);
    }
}

function removeChildren(parent) {
    parent.innerHTML = ""
}

function get_code() {
	document.getElementById("codeOutput").value = document.getElementById("code").innerHTML;
}