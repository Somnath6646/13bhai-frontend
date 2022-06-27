import React, { Component, useEffect, useState } from "react";
import "../css/BaseDialog.css";
import "../css/ChooseSkillDialog.css";
import { withCookies, Cookies, useCookies } from "react-cookie";

export const ChooseSkillDialog = ({
  isChooseSkillDialogOpen,
  setSkill,
  setIsChooseSkillDialogOpen,
}) => {
  const [cookies, setCookie, removeCookie] = useCookies(["skill"]);

  var skill = "";

  var dialog = (
    <div
      className="base-dialog"
      onClick={() => {
        setIsChooseSkillDialogOpen(false);
      }}
    >
      <div
        className="chooseskilldialog"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <input
          type="text"
          id="skill-name-input"
          class="skill-name-input-container"
          placeholder="Type here the skill’s name..."
          required
          onChange={(event) => {
            const value = event.target.value;
            skill = value;
          }}
        />

        <div
          className="done-buttom"
          onClick={() => {
            setSkill(skill);
            setCookie("skill", skill, {
              path: "/",
            });
            setIsChooseSkillDialogOpen(!isChooseSkillDialogOpen);
          }}
        >
          <div className="done-buttom-text">done</div>
        </div>
      </div>
    </div>
  );

  if (!isChooseSkillDialogOpen) dialog = null;

  return <div>{dialog}</div>;
};
