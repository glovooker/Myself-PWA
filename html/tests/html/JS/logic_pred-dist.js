function show(){let e=0,o="",r=document.querySelectorAll("input");for(console.log(r),i=0;i<r.length;i++)1==r[i].checked&&(num=r[i].value,e=Number(e)+Number(num));e>=5?(o="Mayor riesgo",res2="Tienes un mayor riesgo de tener prediabetes, recomendamos consultar con un especialista.",res3="success"):(o="Poco riesgo",res2="No presenta factores de riesgo , aunque recomendamos consultar con un especialista bajo cualquier sospecha",res3="error"),showalert(e,o)}function showalert(e,o){Swal.fire({title:o,text:res2,icon:res3,confirmButtonText:"Ok"})}