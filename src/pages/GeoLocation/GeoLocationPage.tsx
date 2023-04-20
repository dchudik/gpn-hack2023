import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useLazyGetAddressQuery } from "../../store/services/GeoLocationService";
import { GeoLocationReq } from "../../types/GeoLocation";

const GeoLocationPage = () => {
  const [getAddress, geoLocationDaData] = useLazyGetAddressQuery({});
  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const defaultRadius = 1000;
  const defaultCount = 1;
  const [isBlockLocation, setIsBlockLocation] = useState(false);
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLat(position.coords.latitude);
          setLong(position.coords.longitude);
        },
        () => {
          setIsBlockLocation(true);
        }
      );
    } else {
    }
  }, []);
  useEffect(() => {
    if (lat != 0 && long != 0) {
      getAddress({
        lat: lat,
        long: long,
        radius: defaultRadius,
        count: defaultCount,
      });
    }
  }, [lat, long]);
  return (
    <div>
        <div>
            <Link to="/">Вернуться назад</Link>
        </div>
      {isBlockLocation ? (
        <div>Доступ к геопозиции запрещен.</div>
      ) : (
        <div>
          <div>Текущие координаты:</div>
          <div>
            <p>Lat: {lat}</p>
            <p>Long: {long}</p>
          </div>
          {geoLocationDaData?.isSuccess ? (
            geoLocationDaData?.data[0]?.data?.city ? (
              <div>
                Текущий населенный пункт:{" "}
                {geoLocationDaData?.data[0]?.data?.city}
              </div>
            ) : (
              <p>
                К сожалению DaData не может определить ваш населенный пункт.
              </p>
            )
          ) : null}
        </div>
      )}
    </div>
  );
};

export default GeoLocationPage;
