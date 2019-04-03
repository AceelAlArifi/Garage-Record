import React, { Component } from 'react'

export class AddCheckIn extends Component {

    state = {
        title: '',
        link: ''
    }

    titleOnChange = (e) => {
        this.setState({
            title: e.target.value,
        })
    }

    linkOnChange = (e) => {
        this.setState({
            link: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddCheckIn((this.state.title), (this.state.link))
        this.setState({
            title: '',
            link: ''
        })
    }


    render() {
        return (
            <div>
                <form>
                    <input
                        type='text'
                        name='title'
                        value={this.state.title}
                        onChange={this.titleOnChange}
                        placeholder='Add title ...'
                        className='form-control'
                    />
                    <input
                        type='text'
                        name='link'
                        value={this.state.link}
                        onChange={this.linkOnChange}
                        placeholder='Add link ...'
                        className='form-control'
                    />
                    <input
                        type='submit'
                        value='submit'
                        onClick={this.onSubmit}
                        className='btn btn-outline-secondary'
                    />
                </form>

            </div>
        )
    }
}

export default AddCheckIn;