import { Posts } from "@/core";

interface Props {
    dataForm: Posts;
    setDataForm: React.Dispatch<React.SetStateAction<Posts>>
};

export const useChangeHandlerKeyWords = ({dataForm, setDataForm }: Props) => {

        const handleChangeKeyWords = (index: number) =>
          (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
          ) => {
            const keywords = [...dataForm.keyWords];
            keywords[index] = event.target.value;
            setDataForm({ ...dataForm, keyWords: keywords });
            console.log("dataForm", dataForm);
          };

        return {
            handleChangeKeyWords
        }
}