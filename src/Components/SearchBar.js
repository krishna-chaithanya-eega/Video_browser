import React ,{Component} from 'react';
import '../SearchBar.css';

class SearchBar extends Component{
    state={'term':''}

    onFormSubmit=(event)=>{
        event.preventDefault();   
        this.props.onSubmit(this.state.term);
    }

    render(){
        return(
            <>
            <form onSubmit={this.onFormSubmit}  >
                <div className="Searchbox">
                   
                    <input type="text" value={this.state.term} onChange={ e=>this.setState({'term':e.target.value})}   placeholder="search videos"/  >
                    <i className="fas fa-search" />
                    
                    
                    
                    
                </div>
                <hr/>
            </form>
            </>
        );
    }

}
export default SearchBar;


