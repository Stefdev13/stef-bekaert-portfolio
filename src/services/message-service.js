import emailjsApi from '../adapters/emailjs-api'

export const sendMessage = (message) => {
    var data = {
        service_id: "service_1gn0yoe",
        template_id: "template_rygw2vd",
        user_id: "EH1YPyY4Qz8gyA_sY",
        template_params: message,
    }

    return emailjsApi.sendEmail('email/send', data);
}

export const reportBug = (message) => {
    var data = {
        service_id: "service_1gn0yoe",
        template_id: "template_vqmyje5",
        user_id: "EH1YPyY4Qz8gyA_sY",
        template_params: message,
    }

    return emailjsApi.sendEmail('email/send', data);
}