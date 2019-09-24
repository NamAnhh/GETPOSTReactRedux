

import React from "react";
import { connect } from "react-redux";
import { fetchStudent } from "../actions/studentAction";
import { postStudent } from "../actions/studentAction";

class StudentList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            obj: {
                "student": {
                    "studentName": "Ka Linh",
                    "age": "16",
                    "phone": "113",
                    "status": true
                }
            }
        }
    }

    componentDidMount() {
        this.props.fetchStudent();
    }

    render() {
        const {obj:{ student: { studentName, age, phone }} } = this.state
        console.log("sth", this.props)
        const { error, loading, getStudentData } = this.props;
        if (error) {
            return <div>ERROR! {error.message}</div>
        }

        if (loading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                {/* <ul>
                    {getStudentData.map(data =>
                        <li key={data._id}>{data.studentName} - {data.age}</li>
                    )}
                </ul> */}

                <label>
                studentName:
                    <input type="text" value={studentName} onChange={this.handleChange.bind(this, 'studentName')} />
                </label>

                <label>
                    age:
                    <input type="text" value={age} onChange={this.handleChange.bind(this, 'age')} />
                </label>

                <label>
                phone:
                    <input type="text" value={phone} onChange={this.handleChange.bind(this, 'phone')} />
                </label>

                <button onClick={this.handleSubmit}>Send data!</button>
            </div>
        );
    }

    handleChange = (keyChange, event) =>{
        console.log("keyChange", keyChange)
        let { obj } = this.state;
        obj.student[keyChange] = event.target.value;
        console.log("obj", obj)
        this.setState({ obj });
      }

    handleSubmit = (event) => {
        this.props.postStudent(this.state.obj);
    }
}



//thằng studentRoot phải đặt trùng tên với rootReducer
const mapStateToProps = ({ studentRoot }) => ({
    getStudentData: studentRoot.items,
    loading: studentRoot.loading,
    error: studentRoot.error
});


const mapDispatchToProps = dispatch => ({
    fetchStudent: () => dispatch(fetchStudent()),
    postStudent: (x) => dispatch(postStudent(x))
})

export default connect(mapStateToProps, mapDispatchToProps)(StudentList);