/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from 'react';

import { api } from '../../services/api';

import * as C from './styles';

import { useNavigate, useParams } from 'react-router-dom';

type AlbumProps = {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
};

type TitleProps = {
  title: string;
}

const Album = () => {
  const [album, setAlbum] = useState<AlbumProps[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [title, setTitle] = useState<TitleProps>();

  // console.log(title)

  const params = useParams();
  const navigate = useNavigate();
  const { getSpecificAlbum, getSpecificTitle } = api;

  useEffect(() => {
    getAlbum();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getTitle()
  })

  const getAlbum = async () => {
    setLoading(true);
    const post = await getSpecificAlbum(params.slug);
    setLoading(false);
    setAlbum(post);
  };

  const getTitle = async () => {
    const title = await getSpecificTitle(params.slug);
    setTitle(title);
  };

  const handleHomeButton = () => {
    navigate('/');
  };

  return (
    <div>
      <C.ButtonHome onClick={handleHomeButton}>Home</C.ButtonHome> <br />
      {loading && <div>Loading...</div>}
      {!loading && album.length > 0 && (
        <>
          <C.Title>{title?.title}</C.Title>

          <C.PhotosContainer>
            {album.map((photo, index) => (
              <C.PhotoAnchor href={`/photo/${photo.id}`} key={index}>
                <C.PhotosList>
                  <img src={photo.thumbnailUrl} alt="" />
                </C.PhotosList>
              </C.PhotoAnchor>
            ))}
          </C.PhotosContainer>
        </>
      )}
    </div>
  );
};

export default Album;
