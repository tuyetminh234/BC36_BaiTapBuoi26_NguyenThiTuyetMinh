let GPA = (...params) => {
  let total = 0;
  averagePoint = 0;
  for (let i = 0; i < params.length; i++) {
    total += params[i];
  }
  averagePoint = total/params.length;
  return averagePoint;
};
let grade1 = () => {
  const math = +document.getElementById("inpToan").value;
  const physic = +document.getElementById("inpLy").value;
  const chemistry = +document.getElementById("inpLy").value;
  const AvgPoint = GPA(math, physic, chemistry);
  document.getElementById("tbKhoi1").innerHTML = AvgPoint;
};
let grade2 = () => {
  const literature = +document.getElementById("inpVan").value;
  const history = +document.getElementById("inpSu").value;
  const geography = +document.getElementById("inpDia").value;
  const english = +document.getElementById("inpEnglish").value;
  const AvgPoint = GPA(literature, history, geography, english);
  document.getElementById("tbKhoi2").innerHTML = AvgPoint;

};
