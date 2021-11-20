import React from "react";
import { Button } from "../../../../components/Button/Button";
import { InputField, InputType } from "../../../../components/InputField/InputField";
import { Select } from "../../../../components/Select/Select";
import { ApplicationPageStep } from "../../components/ApplicationPageStep";

interface ApplicationPageContactDetailsProps {
  handleGoToNextStep: (pageData: unknown) => void;
  handleGoToPreviousStep: () => void;
}

export const ApplicationPageContactDetails = ({
  handleGoToNextStep,
  handleGoToPreviousStep,
}: ApplicationPageContactDetailsProps) => {
  // --- YOUR CODE HERE ---

  return (
    <ApplicationPageStep
      pageTitle="Deine Kontaktdaten"
      pageData={{}}
      nextButtonLabel="Weiter"
      handleGoToNextStep={handleGoToNextStep}
      showPreviousPageButton={false}
      handleGoToPreviousStep={handleGoToPreviousStep}
    >
      <div>
        label?: string,
        value?: string,
        validation: boolean,
        validationText: string,
        placeholderText: string,
        type: InputType,
        <InputField placeholderText={'placeholder'} type={InputType.text}
        validation={false} validationText={'validation text'} label={'label'}
        ></InputField>
        <h2>Staatsangehörigkeit</h2>
        <Select options={['DE','EN','FR']} placeholder={'select something'}></Select>
      </div>
    </ApplicationPageStep>
  );
};
