export const testConfig = {
    environment: {
        hml: {
            url: "http://localhost:3000"
        }
    },
    
    options: {
        smokeThresholds: {
            vus: 1,
            duration: '1s',
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            }
        },

        vinteUsuarios1Minuto: {
            vus: 20,
            thresholds: {
                http_req_duration: ['p(95)<2000'],
                http_req_failed: ['rate<0.01']
            },
            stages: [
                {duration: '10s', target: 10},
                {duration: '10s', target: 10}
            ]
        }
    }
}