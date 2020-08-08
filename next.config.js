module.exports = {
    
        async rewrites() {
            return [
              {
                source: '/stock-code/:slug',
                destination: '/stocks', // Matched parameters can be used in the destination
                
              },
            ]
          },
    
    
  }
  