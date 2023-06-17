let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];

    function PrintDeveloperbyMap() {
        arr.map(item=>{
            if(item.profession==="developer"){
               console.log(item);
            }
        });
    }

    function PrintDeveloperbyForEach() {
        arr.forEach(item => {
              if(item.profession==="developer")
                console.log(item);
        });
    }

    function addData() {
        arr.push({id:4,name:"susan",age:"20",profession:"intern"});
        arr.map((val,index)=>console.log(index,val))
    }

    function removeAdmin() {
        arr = arr.filter(item => item.profession !== "admin");
        console.log(arr);
    }

    function concatenateArray() {
        let Newarray=[{ id: 5, name: "Naveen", age: '23', profession: 'engineer' },
                      { id: 6, name: "keerthi", age: '24', profession: 'branchmanager' },
                      { id: 7, name: "dheena", age: '31', profession: 'Associate' }];
        
        let ans=arr.concat(Newarray);
        console.log(ans);
    }