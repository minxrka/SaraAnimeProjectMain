import React from "react";
import Juzo from "../../img/other-content/juzo.png";
import "./addedFavoriteAnime.css";
import Dialog from "@mui/material/Dialog";

const AddedFavoriteAnime = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <React.Fragment>
      <div
        onClick={handleClickOpen}
        className="card_animation transition-colors cursor-pointer border-[.125rem] w-full h-auto border-dashed border-cyberpunk bg-[#4990E833] hover:bg-[#4990E836] hover:transition-colors rounded-[1.25rem]"
      >
        <div className="h-full flex flex-col justify-center gap-[.625rem]">
          <h1 className="text-center font-GothamPro text-white text-[1.125rem] font-light select-none">
            Добавьте свои любимые аниме, чтобы поделиться ими с другими
            пользователями.
          </h1>
          <div className="max-w-[9.375rem] h-auto mx-auto">
            <img
              className="w-full mx-auto h-full select-none"
              src={Juzo}
              alt=""
            />
            <img src="" alt="" /> <img src="" alt="" />
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        className="backdrop-blur-[.3125rem] transition-all"
      >
        <h1>
          МОДАЛКА СО ВСЕМИ АНИМЕ БУДЕТ ПОИСК + ПРЕДЛОЖЕННЫЕ АНИМЕ (ПОПУЛЯРНЫЕ)
        </h1>
      </Dialog>
    </React.Fragment>
  );
};

export default AddedFavoriteAnime;
