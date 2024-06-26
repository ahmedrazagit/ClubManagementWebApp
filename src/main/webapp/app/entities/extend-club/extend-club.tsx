import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Button, Table } from 'reactstrap';
import { Translate } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { IExtendClub } from 'app/shared/model/extend-club.model';
import { getEntities } from './extend-club.reducer';

export const ExtendClub = () => {
  const dispatch = useAppDispatch();

  const location = useLocation();
  const navigate = useNavigate();

  const extendClubList = useAppSelector(state => state.extendClub.entities);
  const loading = useAppSelector(state => state.extendClub.loading);

  useEffect(() => {
    dispatch(getEntities({}));
  }, []);

  const handleSyncList = () => {
    dispatch(getEntities({}));
  };

  return (
    <div>
      <h2 id="extend-club-heading" data-cy="ExtendClubHeading">
        <Translate contentKey="teamprojectApp.extendClub.home.title">Extend Clubs</Translate>
        <div className="d-flex justify-content-end">
          <Button className="me-2" color="info" onClick={handleSyncList} disabled={loading}>
            <FontAwesomeIcon icon="sync" spin={loading} />{' '}
            <Translate contentKey="teamprojectApp.extendClub.home.refreshListLabel">Refresh List</Translate>
          </Button>
          <Link to="/extend-club/new" className="btn btn-primary jh-create-entity" id="jh-create-entity" data-cy="entityCreateButton">
            <FontAwesomeIcon icon="plus" />
            &nbsp;
            <Translate contentKey="teamprojectApp.extendClub.home.createLabel">Create new Extend Club</Translate>
          </Link>
        </div>
      </h2>
      <div className="table-responsive">
        {extendClubList && extendClubList.length > 0 ? (
          <Table responsive>
            <thead>
              <tr>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.id">ID</Translate>
                </th>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.clubname">Clubname</Translate>
                </th>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.clubdescription">Clubdescription</Translate>
                </th>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.numberofmembers">Numberofmembers</Translate>
                </th>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.numberofevents">Numberofevents</Translate>
                </th>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.university">University</Translate>
                </th>
                <th>
                  <Translate contentKey="teamprojectApp.extendClub.user">User</Translate>
                </th>
                <th />
              </tr>
            </thead>
            <tbody>
              {extendClubList.map((extendClub, i) => (
                <tr key={`entity-${i}`} data-cy="entityTable">
                  <td>
                    <Button tag={Link} to={`/extend-club/${extendClub.id}`} color="link" size="sm">
                      {extendClub.id}
                    </Button>
                  </td>
                  <td>{extendClub.clubname}</td>
                  <td>{extendClub.clubdescription}</td>
                  <td>{extendClub.numberofmembers}</td>
                  <td>{extendClub.numberofevents}</td>
                  <td>{extendClub.university}</td>
                  <td>{extendClub.user ? extendClub.user.login : ''}</td>
                  <td className="text-end">
                    <div className="btn-group flex-btn-group-container">
                      <Button tag={Link} to={`/extend-club/${extendClub.id}`} color="info" size="sm" data-cy="entityDetailsButton">
                        <FontAwesomeIcon icon="eye" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.view">View</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/extend-club/${extendClub.id}/edit`} color="primary" size="sm" data-cy="entityEditButton">
                        <FontAwesomeIcon icon="pencil-alt" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.edit">Edit</Translate>
                        </span>
                      </Button>
                      <Button tag={Link} to={`/extend-club/${extendClub.id}/delete`} color="danger" size="sm" data-cy="entityDeleteButton">
                        <FontAwesomeIcon icon="trash" />{' '}
                        <span className="d-none d-md-inline">
                          <Translate contentKey="entity.action.delete">Delete</Translate>
                        </span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          !loading && (
            <div className="alert alert-warning">
              <Translate contentKey="teamprojectApp.extendClub.home.notFound">No Extend Clubs found</Translate>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default ExtendClub;
