import Api from '@/services/Api'

export default {
    contact (info) {
        console.log("inside contact method of ContactService")
        return Api().post('register-yourself', JSON.stringify(info))
    }
}