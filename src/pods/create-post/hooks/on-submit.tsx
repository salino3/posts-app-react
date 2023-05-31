import { Posts } from "@/core";

export const useOnSubmit = (dataForm : Posts) => {

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (
    event: React.FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();

    const nonEmptyKeyWords = dataForm.keyWords.filter(
      (keyword) => keyword !== ""
    );
    const result = { ...dataForm, keyWords: nonEmptyKeyWords };

    console.log("onSubmit", result);
  };

  return {
    handleSubmit,
  };
};
