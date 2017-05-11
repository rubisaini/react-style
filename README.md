# react-style
A React application uses styles property in different ways:

## Style 1: Inline
`<div style={{backgroundColor: 'red'}}>Choose your items</div>`

## Style 2: Internal 
  `render(){
        const footer = '.footer {background-color: green}'
        
        return (
            <div className='footer'>
            <style>{footer}</style>
            </div>
        )
    }`


## Style 3: Create a css/scss file 
Create separate files for css/scss and inject these files in component

We can integrate all css/scaa files into one file using `extract-text-webpack-plugin` module.
