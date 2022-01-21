const handleAdd = async () => {
    //methode 1
    // fetch(`http://localhost:3001/Form?_page=${page}&_limit=3`)
    //     .then((d) => d.json())
    //     .then(setData)

    //methode 2
    // const {data}=await axios.get(`http://localhost:3001/Form?_page=${page}&_limit=3`)
    // setData(data)

    // method 3
    const { data } = await table.get("/", {
        params: {
            _page: page,
            _limit: 4
        }
    })
    setData(data)
};

const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(formdata)
    const { data } = await table.post("/", {
        ...formdata
    })
        .then(handleAdd())
        .then(e.target.username.value = "", e.target.age.value = "", e.target.address.value = "", e.target.salary.value = "", e.target.ismarried.checked = false, e.target.file.value = "")
        .then(handleAdd())




    // fetch("http://localhost:3001/Form", {
    //     method: "POST",
    // body: JSON.stringify({
    //     ...formdata,

    // }),

    //     headers: {
    //         "Content-Type": "application/json"
    //     }
    // }).then()
};
const handleurl = async (e) => {
    if (e.target.name === "department") {
        const { data } = await table.get("/", {
            params: {
                department: e.target.value,
                _page: page,
                _limit: 4
            }
        })
        setData(data)
        // fetch(`http://localhost:3001/Form?department=${e.target.value}&_page=${page}&_limit=3`)
        //     .then((d) => d.json())
        //     .then(setData)
    }
    else if (e.target.name === "sort" && e.target.value === "Low To High") {
        const { data } = await table.get("/", {
            params: {
                _order: "asc",
                _sort: "salary",
                _page: page,
                _limit: 4
            }
        })
        setData(data)
        // fetch(`http://localhost:3001/Form?_sort=salary&_order=asc&_page=${page}&_limit=3`)
        //     .then((d) => d.json())
        //     .then(setData)
    }
    else if (e.target.name === "sort" && e.target.value === "High To Low") {
        const { data } = await table.get("/", {
            params: {
                _order: "desc",
                _sort: "salary",
                _page: page,
                _limit: 4
            }
        })
        setData(data)
        // fetch(`http://localhost:3001/Form?_sort=salary&_order=desc&_page=${page}&_limit=3`)
        //     .then((d) => d.json())
        //     .then(setData)
    }
};
const handleChange = (e) => {
    const file = inputRef.current.files[0];
    const { name, value, type, checked } = e.target;
    setFormdata({
        ...formdata,
        [name]: type === "checkbox" ? checked : value,
    })
};
const handledelete = async (id) => {
    console.log(id)
    const { data } = await table.delete(`/${id}`, {

    }).then(handleAdd())
};