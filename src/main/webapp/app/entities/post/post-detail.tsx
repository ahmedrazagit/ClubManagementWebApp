import React, { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Button, Row, Col } from 'reactstrap';
import { Translate, openFile, byteSize, TextFormat } from 'react-jhipster';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { APP_DATE_FORMAT, APP_LOCAL_DATE_FORMAT } from 'app/config/constants';
import { useAppDispatch, useAppSelector } from 'app/config/store';

import { getEntity } from './post.reducer';

export const PostDetail = () => {
  const dispatch = useAppDispatch();

  const { id } = useParams<'id'>();

  useEffect(() => {
    dispatch(getEntity(id));
  }, []);

  const postEntity = useAppSelector(state => state.post.entity);
  return (
    <Row>
      <Col md="8">
        <h2 data-cy="postDetailsHeading">
          <Translate contentKey="teamprojectApp.post.detail.title">Post</Translate>
        </h2>
        <dl className="jh-entity-details">
          {/*
          <dt>
            <span id="id">
              <Translate contentKey="global.field.id">ID</Translate>
            </span>
          </dt>
          <dd>{postEntity.id}</dd>
          */}
          <dt>
            <span id="title">
              <Translate contentKey="teamprojectApp.post.title">Title</Translate>
            </span>
          </dt>

          <dd>{postEntity.title}</dd>
          <dt>
            <span id="content">
              <Translate contentKey="teamprojectApp.post.content">Content</Translate>
            </span>
          </dt>
          <dd>{postEntity.content}</dd>
          <dt>
            <span id="date">
              <Translate contentKey="teamprojectApp.post.date">Date</Translate>
            </span>
          </dt>
          <dd>{postEntity.date ? <TextFormat value={postEntity.date} type="date" format={APP_DATE_FORMAT} /> : null}</dd>
          <dt>
            <span id="image">
              <Translate contentKey="teamprojectApp.post.image">Image</Translate>
            </span>
          </dt>
          <dd>
            {postEntity.image ? (
              <div>
                {postEntity.imageContentType ? (
                  <a onClick={openFile(postEntity.imageContentType, postEntity.image)}>
                    <img src={`data:${postEntity.imageContentType};base64,${postEntity.image}`} style={{ maxHeight: '30px' }} />
                  </a>
                ) : null}
                <span>
                  {postEntity.imageContentType}, {byteSize(postEntity.image)}
                </span>
              </div>
            ) : null}
          </dd>
          <dt>
            <span id="annoncement">
              <Translate contentKey="teamprojectApp.post.annoncement">Annoncement</Translate>
            </span>
          </dt>
          <dd>{postEntity.annoncement ? 'true' : 'false'}</dd>
          <dt>
            <Translate contentKey="teamprojectApp.post.user">User</Translate>
          </dt>
          <dd>{postEntity.user ? postEntity.user.login : ''}</dd>
        </dl>
        <Button tag={Link} to="/forum" replace color="info" data-cy="entityDetailsBackButton">
          <FontAwesomeIcon icon="arrow-left" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.back">Back</Translate>
          </span>
        </Button>
        &nbsp;
        <Button tag={Link} to={`/post/${postEntity.id}/edit`} replace color="primary">
          <FontAwesomeIcon icon="pencil-alt" />{' '}
          <span className="d-none d-md-inline">
            <Translate contentKey="entity.action.edit">Edit</Translate>
          </span>
        </Button>
      </Col>
    </Row>
  );
};

export default PostDetail;
