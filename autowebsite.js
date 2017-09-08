function autoWebsite(user,template,place){
fetch("https://api.github.com/users/" + user + "/repos",{method:'get'}).then(function (r){
return r.json();
}).then(function (j){
for(var i = 0;i < j.length;i++){
var t = document.getElementById(template).innerHTML;
t = t.replace("[[name]]",j[i].name);
t = t.replace("[[fullname]]",j[i]["full_name"]);
t = t.replace("[[user]]",j[i].user.login);
t = t.replace("[[avatar]]",j[i].user["avatar_url"]);
t = t.replace("[[link]]",j[i]["html_url"]);
t = t.replace("[[issuesdisplay]]",j[i].issues ? "":"hidden");
t = t.replace("[[projectdisplay]]",j[i].projects ? "":"hidden");
t = t.replace("[[downloaddisplay]]",j[i].downloads ? "":"hidden");
t = t.replace("[[wikidisplay]]",j[i].wiki ? "":"hidden");
t = t.replace("[[pagesdisplay]]",j[i].pages ? "":"hidden");
t = t.replace("[[forkdisplay]]",j[i].fork ? "":"hidden");
t = t.replace("[[stargazers]]",j[i]["stargazers_count"]);
t = t.replace("[[watchers]]",j[i]["watchers_count"]);
t = t.replace("[[forks]]",j[i]["fork_count"]);
t = t.replace("[[issues]]",j[i]["open_issues_count"]);
t = t.replace("[[desc]]",j[i]["description"]);
t = t.replace("[[homepage]]",j[i]["homepage"]);
t = t.replace("[[homepagedisplay]]",j[i]["homepage"] ? "":"hidden");
t = t.replace("[[issueslink]]",j[i]["html_url"] + "/issues");
t = t.replace("[[pullslink]]",j[i]["html_url"] + "/pulls");
t = t.replace("[[projectslink]]",j[i]["html_url"] + "/projects");
t = t.replace("[[wkilink]]",j[i]["html_url"] + "/wiki");
document.getElementById(place).innerHTMl += t;
}})}
