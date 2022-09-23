import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { api } from '../../services/api';
import * as C from './styles';

type PhotoGaleryProps = {
  id: number;
  userId?: number;
  title: string;
};

const PhotoGalery = () => {
  const [albumsData, setAlbumsData] = useState<PhotoGaleryProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadAlbuns();
  }, []);

  const loadAlbuns = async () => {
    setLoading(true);
    let json = await api.getPhotoAlbuns();
    setLoading(false);
    setAlbumsData(json);
  };

  return (
    <>
      {loading && <div>Carregando...</div>}
      <C.PhotoGaleryUL>
        {albumsData.map((album, index) => (
          <Link key={album.id} to={`/album/${album.id}`}>
            <C.PhotoGaleryList >{album.title}</C.PhotoGaleryList>
          </Link>
        ))}
      </C.PhotoGaleryUL>
    </>
  );
};

export default PhotoGalery;
