/**
 * servlet 프로젝트명 : product
 * group_id : com.study
 * artifact_id : product
 * name : product
 * jdk : 11
 * dependencies
 * 1. lombok
 * 2. jsp
 * 3. Gson
 * 4. mysql
 * 
 * package
 * com.study.product
 *      config  - DBConfig
 *      entity   - Product
 *      filter  -CommonFilter
 *      dao  -    ProductDao
 *      servlet   - InsertProductServlet (/product , POST) 
 *                - SearchProductServlet  (/products , GET)
 * 
 * DB(db_study)
 * table (product_tb)
 * product_id , product_name(유니크) , product_price , product_size(SS, S, M, L ,XL, XXL)
 */


async function handleAddClick(){

    const productInputs = document.querySelectorAll(".product-inputs");
    const data = {
        productName : productInputs[0].value,
        productPrice : parseInt(productInputs[1].value),
        productSize : productInputs[2].value
    };
    console.log(data);
    const jsonData = JSON.stringify(data);

    const option = {
        method : "POST",
        headers : {
            "Content-Type" : "/application/json"
        },
        body : jsonData 

    };
    for(i = 0 ;i<productInputs.length; i++){
        productInputs[i].value = "";
    }
    
try{

    const response = await fetch("http://localhost:8080/product/data/product",option);

    if(!response.ok){
        throw await response.json();
    }
    const json = await response.json();
    console.log(json);
    alert(`${json.successCount} 건의 상품추가 완료`);
    
}catch(error){
    alert(error?.errorMessage);
}
    

}