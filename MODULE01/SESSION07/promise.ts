let tryPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const isSuccess = true
        if (isSuccess) {
            resolve("success")
        } else {
            reject("error")
        }
    })
})

async function sequence() {
    console.log("satu")

    await tryPromise
        .then((res) => {
            console.log(" status is : ", res)
            return tryPromise
        })
        .then((res) => {
            console.log(" status is : ", res)
        })
        .catch((err) => {
            console.log(" err : ", err)
        })
        .finally(() => {
            console.log("finally")
        })

    console.log("dua")
}

sequence()

// const fetchData = async () => {
//     const getData = await fetch("https://jsonplaceholder.typicode.com/posts")
//     const posts = await getData.json()
//     console.log(posts)
// }


const fetchData = async () => {
    try {
        const getData = await fetch("https://jsonplaceholder.typicode.co/posts")
        const posts = await getData.json()
        console.log(posts)
    } catch (err) {
        console.log("err => ", err)
    }

}

fetchData()

const tryThrow = () => {
    try {
        console.log(" try throw ")
        let isFalse = true
        if (isFalse) {
            throw "Flag is false"
        }
        console.log("success")

    } catch (err) {
        console.error(" err ", err)
    }
}

tryThrow()