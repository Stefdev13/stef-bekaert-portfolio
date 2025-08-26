const basePath = "https://api.emailjs.com/api/v1.0"

const emailjsApi = {
    sendEmail: (endpoint, email) => {
        return fetch(`${basePath}/${endpoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": 'application/json',
            },
            body: JSON.stringify(email)
        })
    },
}

export default emailjsApi;