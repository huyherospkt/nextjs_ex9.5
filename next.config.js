module.exports = {
    experimental: {
        async rewrites() {
            return [
              {
                source: '/stock-code/:slug',
                destination: '/stocks', // Matched parameters can be used in the destination
                
              },
            ]
          },
    },
    
  }
  