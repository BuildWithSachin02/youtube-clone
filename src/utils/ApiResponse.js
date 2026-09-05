// role - ApiResponse  → API ka success response ek standard format mein bhejna

class ApiResponse {
    constructor(
        statusCode, data, message = "success"
    ) { 
        this.statusCode = statusCode
        this.data = data
        this.message = message
        this.success = statusCode < 400 
    }
}