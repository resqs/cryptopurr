import React from 'react';
import uniqBy from 'lodash/uniqBy';
import Context from './Context';
import colors from './colors';
import IdentityAvatar from './Avatar';

export const IfActiveEntity = ({ children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) =>
      activeEntity ? (then && then(activeEntity)) || children(activeEntity) : other || null
    }
  </Context.Consumer>
);

export const IfIsActiveEntity = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) =>
      activeEntity && activeEntity.token === id ? then || children : other || null
    }
  </Context.Consumer>
);

export const IfOwnerOfEntity = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { myEntities } }) =>
      !!myEntities.find(entity => id.toString() === entity.token) ? then || children : other || null
    }
  </Context.Consumer>
);

export const Entity = ({ id, children }) => (
  <Context.Consumer>{({ entityStore: { getEntity } }) => children(getEntity(id))}</Context.Consumer>
);

export const EntityName = ({ id }) => (
  <Context.Consumer>
    {({ entityStore: { getEntity } }) => getEntity(id).name || `Kitty #${getEntity(id).id}`}
  </Context.Consumer>
);

export const EntityAvatar = ({ id, ...props }) => (
  <Context.Consumer>
    {({ entityStore: { getEntity } }) => (
      <IdentityAvatar {...props} backgroundColor={colors[getEntity(id).color]} src={getEntity(id).image_url} />
    )}
  </Context.Consumer>
);

export const Entities = ({ children }) => (
  <Context.Consumer>
    {({ entityStore: { myEntities, changeActiveEntityTo }, entityStore: { getEntity } }) => {
      const entities = myEntities.map(myEntity => getEntity(myEntity.token));
      return children({ entities, changeActiveEntityTo });
    }}
  </Context.Consumer>
);

export const ActiveEntityName = () => (
  <Context.Consumer>{({ entityStore: { activeEntity } }) => <EntityName id={activeEntity.token} />}</Context.Consumer>
);

export const ActiveEntityAvatar = props => (
  <Context.Consumer>
    {({ entityStore: { activeEntity } }) => <EntityAvatar id={activeEntity.token} {...props} />}
  </Context.Consumer>
);

export const IfActiveEntityLiked = ({ id, children, then, other }) => (
  <Context.Consumer>
    {({ entityStore: { activeEntity }, purrStore: { purrs, temporaryPurrs, temporaryReactions } }) => {
      if (!activeEntity) return other;
      const claim = uniqBy([...temporaryPurrs, ...purrs], purr => purr.id).find(({ id: claimId }) => claimId === id);
      const liked =
        claim &&
        claim.targeted
          .concat(temporaryReactions[id] || [])
          .find(({ context }) => context.split(':')[2] === activeEntity.token);
      return liked ? then || children : other;
    }}
  </Context.Consumer>
);