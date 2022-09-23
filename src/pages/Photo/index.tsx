/* eslint-disable @next/next/no-img-element */
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { api } from '../../services/api';

import * as C from './styles';

type PhotoProps = {
  url: string;
  title: string;
};

const Photo = () => {
  const [photo, setPhoto] = useState<PhotoProps>();
  const [loading, setLoading] = useState<boolean>(false);

  const params = useParams();
  const navigate = useNavigate();

  const { getSpecificPhoto } = api;

  useEffect(() => {
    getPhoto();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPhoto = async () => {
    setLoading(true);
    let photo = await getSpecificPhoto(params.slug);
    setLoading(false);
    setPhoto(photo);
  };

  const handleBackButton = () => {
    navigate(-1);
  };

  return (
    <>
      <C.Button onClick={handleBackButton}>Voltar</C.Button>
      {loading && <div>Loading...</div>}
      {!loading && photo && (
        <>
          <C.Title>{photo?.title}</C.Title>
          <img src={photo?.url} alt="" />
        </>
      )}
    </>
  );
};

export default Photo;
