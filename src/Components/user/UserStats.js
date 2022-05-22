import React from 'react'
import { VictoryPie, VictoryChart, VictoryBar } from 'victory'
import { PHOTOS_GET } from '../../api';
import useFetch from '../../Hooks/useFecth';
import { UserContext } from '../../UserContext';
import Loading from '.././helper/Loading'

const UserStats = ({ user }) => {
  
  const { loading, error, request } = useFetch();
  const [ photos, setPhotos ] = React.useState(null)

  React.useEffect(() => {
    async function getPhotos() {
      const { url, endpoint } = PHOTOS_GET({
        page: 0,
        total: 999,
        user: 'cat',
      });
      const { json } = await request(url, endpoint);
      setPhotos(json.map((photo) => {
        return {x: photo.title, y: Number(photo.acessos)}
      }))
    }
    getPhotos()
  }, [request, user]);

  if (loading) return <Loading />
  if (photos) return (
    <div>
      <VictoryChart height={400} width={400}
          domainPadding={{ x: 50, y: [0, 20] }}
          style={{fill: '#333'}}
        >
          <VictoryBar
            
            data={[
              ...photos
            ]}
          />
        </VictoryChart>

        <VictoryPie 
    style={{ labels: { fill: "#333" } }}
    innerRadius={90}
    labelRadius={160}

     data={[
      ...photos
    ]}/>
    </div>
    
  )
}

export default UserStats