import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { signUp } from "../actions/registerTruckDriverActions";
import t from "tcomb-form-native";

const Form = t.form.Form;
const TruckDriver = t.struct({
  username: t.String,
  password: t.String,
  email: t.String,
  phone_number: t.String,
  terms: t.Boolean
});

const options = {
  fields: {
    email: {
      error:
        "Without an email address how are you going to reset your password when you forget it?"
    },
    phone_number: {
      error:
        "Without an phone number how are you going to send confirmation message to the driver?"
    },
    terms: {
      label: "Agree to All Terms"
    },
    password: {
      secureTextEntry: true
    }
  }
};

class RegisterTruckDriverScreen extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = () => {
    this.props.signUp(this._form.getValue())
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Text style={{ fontSize: 18, marginBottom: 10, color: "black" }}>
            { this.props.truckDriver.username || 'Please register a new driver'}
          </Text>
        </View>
        <View style={{ flex: 7 }}>
          <View style={formStyles.container}>
            <Form
              ref={c => (this._form = c)}
              type={TruckDriver}
              options={options}
            />
            <Button title="Sign Up A Driver!" onPress={this.handleSubmit} />
          </View>
        </View>
      </View>
    );
  }
}

const mapStateToProps = state => {
  const { truckDriver } = state;
  return { truckDriver };
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      signUp
    },
    dispatch
  );

const formStyles = {
  ...Form.stylesheet,
  container: {
    justifyContent: "center",
    marginTop: 50,
    padding: 20,
    backgroundColor: "#ffffff"
  },
  controlLabel: {
    normal: {
      color: "blue",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    },
    error: {
      color: "red",
      fontSize: 18,
      marginBottom: 7,
      fontWeight: "600"
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterTruckDriverScreen);
