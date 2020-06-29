import React from 'react'; 

export default class Resource extends React.Component { 
    state = {
        loading: true,
        error: false, 
        resource: {}
    }
    
    async componentDidMount() {
        try { 
            const response = await this.props.fetch(); 
            this.setState({
                error: false,
                loading: false, 
                resource: response
            });
            
        } catch (error) { 
            console.log( 'error: ', error); 
            this.setState({
                loading: false, 
                error: true
            })
        }
    }
    

    render() {
        const { loading, error, resource } = this.state;
        if(loading) { 
            return <h1>Loading...</h1>
        } else if(error) { 
            return <h1>Something went wrong...</h1>
        } else { 
            return this.props.render(resource); 
        }
    } 
}