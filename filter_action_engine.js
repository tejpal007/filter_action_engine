let rules_data = {
    "combinator": "and",
    "entity_type": "entity",
    "rules": [
        {
            "field": "product_price",
            "operator": ">",
            "value": "150"
    },
    {
        "field": "product_name",
        "operator": "contains",
        "value": "product 1"
    }
    ]
}
    
    // actions config
   let actions = {
        "action": "transform",
        "entity_type": "entity",
        "action_params": {
            "replacement_value": "category 100",
            "field_name": "product_category"
        }
    }
    
    let list_data = [{
        product_id: 1,
        product_name: "product 1",
        product_price: 100,
        product_category: "category 1"
    },{
        product_id: 2,
        product_name: "product 100",
        product_price: 200,
        product_category: "category 2"
    },{
        product_id: 3,
        product_name: "product 3",
        product_price: 300,
        product_category: "category 3"
    }];

    let filterEngine = (data,rules_data)=>{
        let rules = rules_data.rules;
        let filteredData = [];
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            if(rules_data.combinator === "and"){
                if(rules.every(rule => ruleValidator(element,rule))){
                    filteredData.push(element);
                }
            }else if(rules_data.combinator === "or"){
                if(rules.some(rule => ruleValidator(element,rule))){
                    filteredData.push(element);
                }
            }
        } 
        return filteredData;
    }
    
    const ruleValidator = (item,rule)=>{
        let is_valid = false
        switch (rule.operator) {
            case "<":  is_valid = item[rule.field] < rule.value
                break;
            case ">": is_valid = item[rule.field] > rule.value
                break;
            case "=": is_valid= item[rule.field] === rule.value
                break;
            case "contains": is_valid = item[rule.field].includes(rule.value)
                break;
            default:
                break;
        }

        return is_valid
    }
        
    
    let transformerEngine = (filteredData,actions)=>{
        for (let index = 0; index < filteredData.length; index++) {
            const element = filteredData[index];
            element[actions.action_params.field_name] = actions.action_params.replacement_value;
        }
        return filteredData;
    }



    console.log(list_data);

    let filteredData = filterEngine(list_data,rules_data);
    console.log("filteredData",filteredData);

    let transformedData = transformerEngine(filteredData,actions);
    console.log("transformedData",transformedData);
