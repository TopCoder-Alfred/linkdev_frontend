import {
  SettingManagement,
  SettingManagementInner,
  SettingTitle,
  Form,
  FormTitle,
  FormContent,
  SettingInfo,
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
} from "./Settings.style";
import { toggleViewableStatus } from "../../actions/index";
import { useEffect, useState } from "react";
// import axios from "axios";
import axios from "../utils/request/index";
import setAuthToken from "../utils/setAuthToken";

const Settings = () => {
  const [checked, setChecked] = useState(false);

  const getViewable = async () => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }
    try {
      const { data } = await axios.get("/api/users/user");
      setChecked(data.viewable === true ? true : false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getViewable();
  });

  const toggleHandler = () => {
    // e.preventDefault();
    toggleViewableStatus();
    setChecked(!checked);
  };

  return (
    <SettingManagement>
      <SettingManagementInner>
        <SettingTitle>Settings</SettingTitle>
        <Form>
          <FormTitle>Permission</FormTitle>
          <FormContent>
            <SettingInfo>
              Allow your profile to show on the Developer page.
            </SettingInfo>
            <CheckBoxWrapper>
              <CheckBox
                id="checkbox"
                type="checkbox"
                checked={checked}
                onChange={toggleHandler}
              />
              <CheckBoxLabel htmlFor="checkbox" />
            </CheckBoxWrapper>
          </FormContent>
        </Form>
      </SettingManagementInner>
    </SettingManagement>
  );
};

export default Settings;
