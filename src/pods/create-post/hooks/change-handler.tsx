import { Posts } from '@/core';

interface Props {
  dataForm: Posts;
  setDataForm: React.Dispatch<React.SetStateAction<Posts>>;
};

export const useChangeHandler = ({ dataForm, setDataForm }: Props) => {

  const handleChange =
    (field: keyof Posts) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      if (field === "keyWords") {
        const keywords = event.target.value.split(",").slice(0, 3);
        setDataForm({ ...dataForm, [field]: keywords });
      } else {
        setDataForm({ ...dataForm, [field]: event.target.value });
      }
      console.log("dataForm", dataForm);
    };

  return {
    handleChange,
  };
};
